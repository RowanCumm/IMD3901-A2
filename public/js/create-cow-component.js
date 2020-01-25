AFRAME.registerComponent( 'create-cow-component',{
    init : function()
    {
        console.log('init component');

        const Context_AF = this;
        const skyElem = document.querySelector("#background");
        Context_AF.el.addEventListener('click', function(event) {
            console.log('click');
            if (Context_AF.el.getAttribute('id') === 'button1' && (skyElem.getAttribute('src') != '#sky1')
            ||Context_AF.el.getAttribute('id') === 'button2' && (skyElem.getAttribute('src') != '#sky2')
            || Context_AF.el.getAttribute('id') === 'button3' && (skyElem.getAttribute('src') != '#sky3'))
            {
                Context_AF.deleteExisting();
            }
            
            Context_AF.createCow();
        });

        Context_AF.el.addEventListener('mouseenter', function(event) {
            Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
        });

    },
    deleteExisting: function(){

        var sceneEl = document.querySelector('a-scene');

        document.querySelectorAll(".bois").forEach(e => e.parentNode.removeChild(e));
       
    },
    createCow: function() {
        const Context_AF = this;

        let modelElem = document.createElement('a-entity');
        modelElem.setAttribute('class','clickable bois');
        modelElem.setAttribute('id', 'bois');


        
        const skyElem = document.querySelector("#background");

        if (Context_AF.el.getAttribute('id') === 'button1')
            {
                if(skyElem.getAttribute('src') != '#sky1'){
                    skyElem.setAttribute('src', '#sky1');
                }
                
                modelElem.setAttribute('obj-model', 'obj: #appleObj');
                modelElem.setAttribute('material', 'color: #FF0000');
                modelElem.setAttribute('scale', {x:0.1, y:0.1, z:0.1});
            }
        else if (Context_AF.el.getAttribute('id') === 'button2')
            {
                if(skyElem.getAttribute('src') != '#sky2'){
                    skyElem.setAttribute('src', '#sky2');
                }
                modelElem.setAttribute('obj-model', 'obj: #pizzaObj');
                modelElem.setAttribute('material', 'color: #F56826');
                modelElem.setAttribute('scale', {x:4, y:4, z:4});
            }
        else if (Context_AF.el.getAttribute('id') === 'button3')
            {
                if(skyElem.getAttribute('src') != '#sky3'){
                    skyElem.setAttribute('src', '#sky3');
                }
                modelElem.setAttribute('obj-model', 'obj: #rexObj');
                modelElem.setAttribute('scale', {x:0.025, y:0.025, z:0.025});
                modelElem.setAttribute('material', 'color: #19992A');
            }
        
        
        modelElem.setAttribute('delete-cow-component', '');
        modelElem.setAttribute('position', { x:(Math.random() * 12.0) -4.0, y:0, z:-15});
        
        modelElem.setAttribute('rotation', {x:0, y:Math.random() * 360.0, z:0});

        let scene = document.querySelector('a-scene');
        scene.appendChild(modelElem);
        
    }
});