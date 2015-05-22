CssForger = function() {

    this.sourceElements = [];
    this.targetElements = [];
    this.createdCssRules = [];

    /**
     * @param {HTMLElement} sourceNode
     * @param {HTMLElement} targetNode
     */
    this.process = function(sourceNode, targetNode) {
        var sourceElement, targetElement;

        for (var i = 0; i < sourceNode.children.length; i++) {
            sourceElement = sourceNode.children.item(i);
            targetElement = this.duplicate(sourceElement, targetNode, true);
            this.style(sourceElement, targetElement);
            targetNode.removeChild(targetElement);
        }
    };

    this.publish = function() {
        this.createdCssRules.forEach(function(cssRules, styleSheetIndex) {
            var styleSheet = document.styleSheets.item(styleSheetIndex);
            cssRules.forEach(function(cssRule) {
                styleSheet.insertRule(cssRule, styleSheet.cssRules.length);
            });
        });
    };

    /**
     * @param {HTMLElement} sourceElement
     * @param {HTMLElement} targetNode
     * @param {Boolean} hide
     * @returns {HTMLElement}
     */
    this.duplicate = function(sourceElement, targetNode, hide) {
        var targetElement, nestedSourceElement, nestedTargetElement;

        if (this.sourceElements.indexOf(sourceElement) !== -1) {
            return null;
        }

        targetElement = sourceElement.cloneNode(false);

        if (hide) {
            targetElement.style.display = 'none';
        }

        this.sourceElements.push(sourceElement);
        this.targetElements.push(targetElement);
        targetNode.appendChild(targetElement);

        if (sourceElement.children) {
            for (var i = 0; i < sourceElement.children.length; i++) {
                nestedSourceElement = sourceElement.children.item(i);
                nestedTargetElement = this.duplicate(nestedSourceElement, targetElement, false);
                this.style(nestedSourceElement, nestedTargetElement);
            }
        }

        return targetElement;
    };

    /**
     * @param {HTMLElement} sourceElement
     * @param {HTMLElement} targetElement
     */
    this.style = function(sourceElement, targetElement) {
        var styleSheetIndex, styleSheet;

        var $sourceElement = jQuery(sourceElement);
        var $targetElement = jQuery(targetElement);

        for (styleSheetIndex = 0; styleSheetIndex < document.styleSheets.length; styleSheetIndex++) {
            /** @type styleSheet CSSStyleSheet */
            styleSheet = document.styleSheets.item(styleSheetIndex);

            if (Object.keys(styleSheet.ownerNode.dataset).indexOf('cssForger') === -1) {
                continue;
            }

            if (typeof this.createdCssRules[styleSheetIndex] === 'undefined') {
                this.createdCssRules[styleSheetIndex] = [];
            }

            this.styleCssRules($sourceElement, $targetElement, styleSheetIndex, styleSheet.cssRules);
        }
    };

    /**
     * @param {jQuery.fn} $sourceElement
     * @param {jQuery.fn} $targetElement
     * @param {Number} styleSheetIndex
     * @param {Array.<CSSRule>} cssRules
     * @param {CSSRule|undefined} mediaCssRule
     */
    this.styleCssRules = function($sourceElement, $targetElement, styleSheetIndex, cssRules, mediaCssRule) {
        var cssRuleIndex, cssRule;

        for (cssRuleIndex = 0; cssRuleIndex < cssRules.length; cssRuleIndex++) {
            cssRule = cssRules[cssRuleIndex];
            if (cssRule.type === CSSRule.MEDIA_RULE) {
                this.styleCssRules($sourceElement, $targetElement, styleSheetIndex, cssRule.cssRules, cssRule);
            } else if ($targetElement.is(cssRule.selectorText) && !$sourceElement.is(cssRule.selectorText)) {
                this.determineCssRule($sourceElement, $targetElement, styleSheetIndex, cssRule, mediaCssRule)
            }
        }
    };

    /**
     * @param {jQuery.fn} $sourceElement
     * @param {jQuery.fn} $targetElement
     * @param {Number} styleSheetIndex
     * @param {CSSRule} cssRule
     * @param {CSSRule|undefined} mediaCssRule
     */
    this.determineCssRule = function($sourceElement, $targetElement, styleSheetIndex, cssRule, mediaCssRule) {
        var selectorParts = this.explodeCssRuleSelector(cssRule.selectorText);
        var selectorPosition = selectorParts.length;
        var newSelectorText = cssRule.selectorText;
        var newCssRule;

        while (selectorPosition > 0 && !$sourceElement.is(newSelectorText)) {
            selectorPosition -= 2;
            newSelectorText = selectorParts.slice(0, selectorPosition).join('') + ' /deep/ ' + selectorParts.slice(selectorPosition + 1).join('');
        }

        newCssRule = newSelectorText + cssRule.cssText.substring(cssRule.selectorText.length);

        if (typeof mediaCssRule !== 'undefined' && mediaCssRule.media.mediaText) {
            newCssRule = '@media ' + mediaCssRule.media.mediaText + " {\n\t" + newCssRule + "\n}";
        }

        // Avoid duplicates
        if (this.createdCssRules[styleSheetIndex].indexOf(newCssRule) !== -1) {
            return;
        }

        this.createdCssRules[styleSheetIndex].push(newCssRule);
    };

    /**
     * @param {String} selectorText
     * @returns {Array}
     */
    this.explodeCssRuleSelector = function(selectorText) {
        var result, matches = [];
        var expression = new RegExp(/^([^>\s]+)(?:\s*(\s|>)\s*)(.+)$/);

        while (result = selectorText.match(expression)) {
            matches.push(result[1]);
            matches.push(result[2]);
            selectorText = result[3];
        }

        // Ensure, there have been matches
        if (matches.length) {
            matches.push(selectorText);
        }

        return matches;
    };

};