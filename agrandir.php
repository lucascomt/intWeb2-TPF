<!DOCTYPE html>
<html lang="fr-ca">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Site personnel, pour tester et regrouper mes connaissances en programmation web responsive. Site testé avec w3c et lighthouse.">
    <link rel="manifest" href="manifest.json">
    <script defer src="js/script.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="style/css/style.css">
    <title>Óðinn - Le projet du Domaine Cyr</title>
    <script>
        // Register service worker.
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('service-worker.js')
                    .then((reg) => {
                        console.log('Service worker registered.', reg);
                    });
            });
        }
    </script>
</head>

<body>
    <div class="container">
        <header>
            <div class="w-full">
                <nav class="shadow-lg">
                    <div class="md:flex items-center justify-between py-2 px-8 md:px-12">
                        <div class="flex justify-between items-center">
                            <div class="font-bold md:text-3xl">
                                <a href="index.html"><img src="https://odinn.ca/medias/logo.webp" class="w-20"
                                        alt="Logo d'Óðinn"></a>
                                <p class="text-xl">Le projet du Domaine Y. Cyr</p>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row md:block mx-2">
                            <a href="index.html"
                                class="rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Accueil</a>
                            <a href="projet.html"
                                class="rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Le
                                projet</a>
                            <a href="photos.html"
                                class="rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Les
                                photos</a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <main>
            <h1 class="text-3xl font-bold text-center m-5">Le projet</h1>
            <section>
                <img src="medias/photos/<?php
                echo $_GET['fichier'];
                ?>.jpg" alt="">
            </section>
        </main>
        <footer>
            <div class="grid md:grid-cols-10 grid-cols-1 gap-1">
                <div class="md:col-span-5 col-span-1">
                    <p class="md:text-left m-2">Telephone: <a href="tel:000-000-0000">000-000-0000</a><br>
                        Courriel: <a href="mailto:lucas@odinn.biz">lucas@odinn.biz</a></p>
                </div>
                <div class="md:col-span-5 col-span-1 md:text-right m-2">
                    <p>Lucas Comtois<br>
                        <a href="https://odinn.biz" target="_blank">Site web principal</a>
                    </p>
                </div>
            </div>


            <div class="flex flex-col items-center">
                <p class="text-sm text-center text-gray-500">© Copyright 2024. Dans le cadre d'une formation du
                    C&eacute;gep de Trois-Rivi&egrave;res. <a href="https://github.com/lucascomt/intWeb2-TPF"
                        target="_blank">Lien Github</a> <a href="https://lucascomt.github.io/intWeb2-TPF/"
                        target="_blank">Lien Web</a></p>
            </div>
        </footer>
    </div>
</body>

</html>1