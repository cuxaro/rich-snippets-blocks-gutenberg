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
          "name": "Legal Seafood",
          "servesCuisine": "Seafood",
          "priceRange": "$$$",
          "telephone": "1234567",
          "address" :{
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
            {JSON.stringify(scriptjson, null, 2) }
            </script>

        </div>


    );
}

registerBlockType('ivanbarreda/rich-snippet-review', {
    title: __('Rich Snippet Review'),
    icon: 'lock',
    category: 'common',

    edit() {
        function imprimir() {
            console.log('prueba');

        }

        return (
            <div>
                
                <p>v 005</p>
                <input onChange={imprimir}></input>
                <button onClick={imprimir}>Boton que muestra cosas</button>
            </div>

        );
    },
    save() {

        function imprimir() {
            console.log('prueba');

        }


        return (
            <div>
                <LogConsola />
                <button onClick={imprimir}>Boton que muestra cosas</button>

            </div>
        );
    },

});

