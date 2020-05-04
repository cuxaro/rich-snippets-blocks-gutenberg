const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;


function LogConsola() {

    scriptjson =
    {
        "@context": "https://schema.org/",
        "@type": "Review",
        "itemReviewed": {
            "@type": "Restaurant",
            "image": "http://www.example.com/seafood-restaurant.jpg",
            "name": "Nombre Restaurante",
            "servesCuisine": "Seafood",
            "priceRange": "$$$",
            "telephone": "1234567",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 William St",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "postalCode": "10038",
                "addressCountry": "US"
            }
        },
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4"
        },
        "name": "A good seafood place.",
        "author": {
            "@type": "Person",
            "name": "Bob Smith"
        },
        "reviewBody": "The seafood is great.",
        "publisher": {
            "@type": "Organization",
            "name": "Washington Times"
        }
    }




    return (
        <div>
            <script type="application/ld+json" >
                {JSON.stringify(scriptjson, null, 2)}
            </script>

        </div>


    );
}
function RichSnippetReviewEdit(props) {

}
function RichSnippetReviewSave(props) {

    schema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Viajes en grupo a ARGENTINA",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "ratingCount": "43",
            "bestRating": "5",
            "worstRating": "1"
        }
    }


}

registerBlockType('ivanbarreda/rich-snippet-review', {
    title: __('Rich Snippet Review'),
    icon: 'lock',
    category: 'rich-snippets',

    edit() {

        return (
            <div>

                <p>v 005</p>
                <input onChange={imprimir}></input>
                <button onClick={imprimir}>Boton que muestra cosas</button>
            </div>

        );
    },
    save() {

        return (
            <div>
                <LogConsola />
                <button onClick={imprimir}>Boton que muestra cosas</button>

            </div>
        );
    },

});

