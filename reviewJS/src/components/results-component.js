ko.components.register("resultscomponent", {
    viewModel: function() {},
    template:
      '<div class="results-wrapper">\
      <div class="results-questions-wrapper">\
          <div class="results-question">\
              <h1 class="results-question-heading correct">QUESTION ONE - Question?</h1>\
              <div class="results-answer-wrapper">\
                  <input type="radio" class="results-radio-button">\
                  <label>This is an answer</label>\
              </div>\
              <div class="results-answer-wrapper">\
                  <input type="radio" class="results-radio-button">\
                  <label>This is an answer</label>\
              </div>\
              <div class="results-answer-wrapper">\
                  <input type="radio" checked class="results-radio-button">\
                  <label>This is an answer</label>\
              </div>\
              <div class="results-answer-wrapper">\
                  <input type="radio" class="results-radio-button">\
                  <label>This is an answer</label>\
              </div>\
          </div>\
      </div>\
      <div class="results-score-aside">\
          <div class="results-score-display">\
              <h2 class="results-score-header">RESULTS</h2>\
              <h1 class="results-score-number green">4/5</h1>\
          </div>\
          <div class="results-score-display">\
              <h2 class="results-rank-header">RANK</h2>\
              <h1 class="results-rank-text green">EXPERT</h1>\
          </div>\
          <div class="results-score-display">\
              <h2 class="results-category-header">CATEGORIES</h2>\
              <div>\
                  <h3 class="results-category-name">Objects:</h3>\
                  <h3 class="results-category-score green">2/2</h3>\
              </div>\
              <div>\
                  <h3 class="results-category-name">Control Blocks:</h3>\
                  <h3 class="results-category-score red">0/1</h3>\
              </div>\
              <div>\
                  <h3 class="results-category-name">Functions</h3>\
                  <h3 class="results-category-score green">2/2</h3>\
              </div>\
          </div>\
          <div class="results-button-group">\
              <div class="results-print-button" role="button">PRINT RESULTS</div>\
              <div class="results-again-button" role="button">TAKE AGAIN</div>\
          </div>\
      </div>\
  </div>'
});