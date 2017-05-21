import Constants from '../components/common/constants'
export function changeCss(className, classValue) {
    let styleEl = document.querySelector('style[data-class="' + className + '"]');
    if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.setAttribute('data-class', className);

        // Append style element to head
        document.head.appendChild(styleEl);
    }

    // Grab style sheet
    const styleSheet = styleEl.sheet;
    const rules = styleSheet.cssRules || styleSheet.rules;
    const style = classValue.substr(0, classValue.indexOf(':'));
    const value = classValue.substr(classValue.indexOf(':') + 1);

    for (let i = 0; i < rules.length; i++) {
        if (rules[i].selectorText === className) {
            rules[i].style[style] = value;
            return;
        }
    }

    let mediaQuery = '';
    if (className.indexOf('@media') >= 0) {
        mediaQuery = '}';
    }
    styleSheet.insertRule(className + '{' + classValue + '}' + mediaQuery, styleSheet.cssRules.length);
}
export function applyTheme(theme) {

    updateCodeTheme(theme.codeTheme);
}

export function resetTheme() {
    applyTheme(Constants.THEMES.windows10);
}


export function changeOpacity(oldColor, opacity) {
    var color = oldColor;
    if (color[0] === '#') {
        color = color.slice(1);
    }

    if (color.length === 3) {
        const tempColor = color;
        color = '';

        color += tempColor[0] + tempColor[0];
        color += tempColor[1] + tempColor[1];
        color += tempColor[2] + tempColor[2];
    }

    var r = parseInt(color.substring(0, 2), 16);
    var g = parseInt(color.substring(2, 4), 16);
    var b = parseInt(color.substring(4, 6), 16);

    return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
}
export function updateCodeTheme(userTheme) {
    let cssPath = '';
    Constants.THEME_ELEMENTS.forEach((element) => {
        if (element.id === 'codeTheme') {
            element.themes.forEach((theme) => {
                if (userTheme === theme.id) {
                    cssPath = theme.cssURL;
                    return;
                }
            });
        }
    });
    const $link = $('link.code_theme');
    if (cssPath !== $link.attr('href')) {
        changeCss('code.hljs', 'visibility: hidden');
        var xmlHTTP = new XMLHttpRequest();
        xmlHTTP.open('GET', cssPath, true);
        xmlHTTP.onload = function onLoad() {
            $link.attr('href', cssPath);
            // if (UserAgent.isFirefox()) {
            //     $link.one('load', () => {
            //         changeCss('code.hljs', 'visibility: visible');
            //     });
            // } else {
            //
            // }
            changeCss('code.hljs', 'visibility: visible');
        };
        xmlHTTP.send();
    }
}
