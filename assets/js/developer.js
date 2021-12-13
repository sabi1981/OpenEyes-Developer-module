
console.log("developer.js");

function createRemoveBtn() {
    const $button = OpenEyes.UI.DOM.createElement('button', {
        'class': 'red hint',
        type: 'button',
        style: 'margin-right:5px'
    });
    $button.innerText = 'Remove all';

    OpenEyes.UI.DOM.addEventListener($button, 'click', null, (e) => {
        e.preventDefault();

        //$('.oe-i.trash-blue').trigger('click');
        const icons = document.querySelectorAll('.oe-i.trash-blue');
        icons.forEach((i) => {
            OpenEyes.UI.DOM.trigger(i, 'click');
        });
    });

    return $button;
}

setTimeout(() => {
        // not so sophisticated yet
        const $elements = document.getElementsByClassName('js-active-elements')[0];

        if ($elements) {
            const $section = OpenEyes.UI.DOM.createElement('section', {
                'class': 'element full edit',
                style: 'min-height: auto; text-align:right; padding:10px 2.5% 10px 2%'
            });
            const $image = new Image();
            $image.style.width = '25px';
            $image.style.float  = 'left';
            $image.src = 'data:image/png;base64,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';
            const $button = createRemoveBtn();
            $section.append($button);
            $section.append($image);
            $elements.prepend($section);
        }
}, 1000);