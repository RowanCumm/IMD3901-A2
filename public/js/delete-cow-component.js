AFRAME.registerComponent( 'delete-cow-component',{
    init : function()
    {
        console.log('init component');

        const Context_AF = this;
        Context_AF.origScale = Context_AF.el.object3D.scale.clone();

        Context_AF.el.addEventListener('click', function(event) {
            console.log('click');
            Context_AF.deleteCow();
        });

        Context_AF.el.addEventListener('mouseenter', function(event) {
            Context_AF.el.object3D.scale.set((Context_AF.origScale.x * 1.1), (Context_AF.origScale.y * 1.1), (Context_AF.origScale.z * 1.1));
            console.log('Context_AF.origScale.x')
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(Context_AF.origScale.x, Context_AF.origScale.y, Context_AF.origScale.z);
        });

    },
    deleteCow: function() {
            const Context_AF=this;
            Context_AF.el.parentNode.removeChild(Context_AF.el);
    }
    
});