describe ("replaceVowels", function() {
  it("replaces vowels in statement with '-'s", function() {
    expect(replaceVowels("apple")).to.equal("-ppl-");
  });

});
