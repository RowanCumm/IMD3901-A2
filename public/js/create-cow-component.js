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

        skyElem.setAttribute('src', '#sky2')

        let cowElem = document.createElement('a-entity');
        cowElem.setAttribute('class','clickable');
        cowElem.setAttribute('obj-model', 'obj:/assets/models/Cow.obj');
        cowElem.setAttribute('material', 'src:assets/textures/Cow.png');
        cowElem.setAttribute('delete-cow-component', '');

        cowElem.setAttribute('position', { x:(Math.random() * 6.0) -3.0, y:0, z:-4.0 -(Math.random() * 3.0)});
        const randScale = 0.2 + (Math.random() * 8.0);
        cowElem.setAttribute('scale', {x:randScale, y:randScale, z:randScale});
        cowElem.setAttribute('rotation', {x:0, y:Math.random() * 360.0, z:0});

        let scene = document.querySelector('a-scene');
        scene.appendChild(cowElem);
    }
});