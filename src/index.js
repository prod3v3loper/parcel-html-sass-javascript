import './custom.scss';

console.log('hello world test');

if (module.hot) {
    module.hot.dispose(function () {
        // module is about to be replaced
    });
    module.hot.accept(function () {
        // module or one of its dependencies was just updated
        console.log('Hot Module');
    });
}