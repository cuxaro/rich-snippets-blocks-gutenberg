const { __ } = wp.i18n; //Dependency is mandatory if want Internalialize the code
const { registerBlockType } = wp.blocks; //Dependency is mandatory for build the Block

//Code showed in the backend 
function RichSnippetReviewEdit(props) {

}

//Code showed in the front 
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
    return schema;


}

registerBlockType('ivanbarreda/rich-snippet-review', {
    title: __('Rich Snippet Review'),
    icon: 'lock',
    category: 'rich-snippets',
    explain: __('This rich snippet only appear in the code of FrontEnd. It doen\'t display for humans, only for machines like Google Bot'),

    edit(props) {

        return (
            <div className="backend rich-snippet-params">

                <div className="title">Review Aggregate Rating</div>
                

                <div className="input-group">
                    <label for="rich-snippet-name">Rich Snippet Name</label>
                    <input className="prueba" placeholder="Spanish Paella ..." id="rich-snippet-name"></input>
                </div>

                <div className="input-group">
                    <label for="rich-snippet-rating-value">Rating Value</label>
                    <input className="prueba" type="number" placeholder="87.." id="rich-snippet-rating-value"></input>
                </div>

                <div className="input-group">
                    <label for="rich-snippet-rating-count">Total number rich-snippets</label>
                    <input className="prueba" type="number" placeholder="46" id="rich-snippet-rating-count"></input>
                </div>

                <div className="input-group">
                    <label for="rich-snippet-rating-best">Range Best Rating (max number)</label>
                    <input className="prueba" type="number" placeholder="100" id="rich-snippet-rating-best"></input>
                </div>
                <div className="input-group">
                    <label for="rich-snippet-rating-worst">Range Worst Rating (min number)</label>
                    <input className="prueba" type="number" placeholder="0" id="rich-snippet-rating-worst"></input>
                </div>

                <div className="preview-rich-snippet">

                </div>

                <aside className="explain">
                    <p>This rich snippet only appear in the code of FrontEnd. It is not display for humans, only for machines like Google Bot</p>

                </aside>



            </div>
        );
    },
    save() {

        return (
            <div>

                Code
                <RichSnippetReviewSave />
                

            </div>
        );
    },

});

