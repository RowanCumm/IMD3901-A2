AFRAME.registerComponent( 'create-cow-component',{
    init : function()
    {
        console.log('init component');

        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event) {
            console.log('click');

            Context_AF.createCow();
        });

        Context_AF.el.addEventListener('mouseenter', function(event) {
            Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
        });

    },
    createCow: function() {
        const Context_AF = this;

        const skyElem = document.querySelector("#background");

        if (Context_AF.el.getAttribute('id') === 'button1')
            {
                skyElem.setAttribute('src', '#sky1');
            }
        else if (Context_AF.el.getAttribute('id') === 'button2')
            {

                skyElem.setAttribute('src', '#sky2');
            }
        else if (Context_AF.el.getAttribute('id') === 'button3')
            {

                skyElem.setAttribute('src', '#sky3');
            }
         
        
    }
});