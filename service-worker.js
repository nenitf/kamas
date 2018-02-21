let versao = 8

let arquivos = [
"/",
"assets/css/reset.css",
"assets/css/css.css",
"assets/css/socialmedia.css",
"assets/bootstrap/css/bootstrap.min.css",
"assets/fontawesome/fontawesome-all.js",
"assets/jquery/jquery.js",
"assets/jquery-ui/jquery-ui.js",
"assets/bootstrap/js/bootstrap.min.js",
"assets/ui-touch-punch/jquery.ui.touch-punch.js",
"assets/js/draganddrop.js",
"assets/js/filtroskill.js",
]

self.addEventListener("install", function(){
    console.log("Instalou")
})

self.addEventListener("activate", function(){
    console.log('ativou')
})


self.addEventListener("fetch", function(event){

    let pedido = event.request
    let promiseResposta = caches.match(pedido).then(respostaCache => {
        let resposta = respostaCache ? respostaCache : fetch(pedido)
        return resposta
    })

    event.respondWith(promiseResposta)

    console.log('fetch')

})

/*
self.addEventListener("activate", function(){
    caches.open("ceep-arquivos-" + versao).then(cache => {
        cache.addAll(arquivos)
            .then(function(){
                caches.delete("ceep-arquivos-" + (versao - 1 ))   
                caches.delete("ceep-arquivos")   
            })
        
    })
})


self.addEventListener("fetch", function(event){

    let pedido = event.request
    let promiseResposta = caches.match(pedido).then(respostaCache => {
        let resposta = respostaCache ? respostaCache : fetch(pedido)
        return resposta
    })

    event.respondWith(promiseResposta)

})
*/
