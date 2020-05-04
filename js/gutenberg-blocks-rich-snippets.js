const { __ } = wp.i18n; //Dependency is mandatory if want Internalialize the code
const { registerBlockType } = wp.blocks; //Dependency is mandatory for build the Block
const { withSelect } = wp.data;


//Code showed in the backend 
function RichSnippetReviewEdit(props) {

}

//Code showed in the front 
function RichSnippetReviewSave(values) {

    schema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": values.attributes.rich_snippet_name,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": values.attributes.rich_snippet_rating_value,
            "ratingCount": values.attributes.rich_snippet_rating_count,
            "bestRating": values.attributes.rich_snippet_rating_best,
            "worstRating": values.attributes.rich_snippet_rating_worst
        }
    }
    return (
        <div>
            <script type="application/ld+json" >
                {JSON.stringify(schema, null, 2)}
            </script>

        </div>
    );

}

function RichSnippetReviewPreview(values) {

    preview = "<div></";
    return


}

registerBlockType('ivanbarreda/rich-snippet-review', {
    title: __('Rich Snippet Review'),
    icon: 'lock',
    category: 'rich-snippets',
    attributes: {

        explain_text: {

            type: 'string'
        },
        rich_snippet_name: {

            type: 'string'
        },
        rich_snippet_rating_value: {

            type: 'string'
        },
        rich_snippet_rating_count: {

            type: 'string'
        },
        rich_snippet_rating_best: {

            type: 'string'
        },
        rich_snippet_rating_worst: {

            type: 'string'
        },

    },

    edit({ attributes, setAttributes }) {

        function updateName(event) {
            setAttributes({ rich_snippet_name: event.target.value });
            console.log(event);
        }
        function updateValue(event) {
            setAttributes({ rich_snippet_rating_value: event.target.value });
            console.log(event);
        }
        function updateCount(event) {
            setAttributes({ rich_snippet_rating_count: event.target.value });
            console.log(event);
        }
        function updateBest(event) {
            setAttributes({ rich_snippet_rating_best: event.target.value });
            console.log(event);
        }
        function updateWorst(event) {
            setAttributes({ rich_snippet_rating_worst: event.target.value });
            console.log(event);
        }

        return (
            <div className="backend rich-snippet-params">

                <div className="title">Review Aggregate Rating</div>


                <div className="input-group">
                    <label for="rich-snippet-name">Rich Snippet Name</label>
                    <input className="prueba" value={attributes.rich_snippet_name} onChange={updateName} placeholder="Spanish Paella ..." id="rich-snippet-name"></input>
                </div>

                <div className="input-group">
                    <label for="rich-snippet-rating-value">Rating Value</label>
                    <input className="prueba" value={attributes.rich_snippet_rating_value} onChange={updateValue} type="number" placeholder="87.." id="rich-snippet-rating-value"></input>
                </div>

                <div className="input-group">
                    <label for="rich-snippet-rating-count">Total number rich-snippets</label>
                    <input className="prueba" value={attributes.rich_snippet_rating_count} onChange={updateCount} type="number" placeholder="46" id="rich-snippet-rating-count"></input>
                </div>

                <div className="input-group">
                    <label for="rich-snippet-rating-best">Range Best Rating (max number)</label>
                    <input className="prueba" value={attributes.rich_snippet_rating_best} onChange={updateBest} type="number" placeholder="100" id="rich-snippet-rating-best"></input>
                </div>
                <div className="input-group">
                    <label for="rich-snippet-rating-worst">Range Worst Rating (min number)</label>
                    <input className="prueba" value={attributes.rich_snippet_rating_worst} onChange={updateWorst} type="number" placeholder="0" id="rich-snippet-rating-worst"></input>
                </div>

                <div className="preview-rich-snippet">
                    <div className="title">TITLE PLACE HOLDER</div>
                    <div className="review">
                        <div className="stars">&#10029;&#10029;&#10029;&#10029;</div>
                        <div className="review-text">Valoración: </div>
                        <div className="review-points"> {attributes.rich_snippet_rating_value} - {attributes.rich_snippet_rating_count} votos</div>
                    </div>
                    <div className="description">This is only a placeholder of description. </div>

                </div>



                <aside className="explain">
                    <p>This rich snippet only appear in the code of FrontEnd. It is not displayed for humans, only for machines like Google Bot</p>

                </aside>



            </div>
        );
    },
    save({ attributes }) {

        return (
            <div>



                <RichSnippetReviewSave attributes={attributes} />




            </div>
        );
    },

});

