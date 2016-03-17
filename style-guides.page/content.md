# The dark side of style guides
## Or how I learned to stop worrying and let people write how they want

When you look at the majority of a style guide, I don't think that the benefits come anywhere close to being worth the costs.

```js
function ( opt)
{
  var foo_bar= true,shouldGo=opts['foo'];
if(shouldGo){
     return this.doSomething();
   }
  else {
    return this.doSomething();
  }
}
```

Something not too dissimilar to this code came through code review recently. As you can imagine it generated many comments, all related to issues deviating from our style guide. The density and severity of the issues wasn't this bad, but of the dozens of comments on the review, none of them spoke to the quality of the design or functionality. All were nitpicks about style, and everyone missed the fact that the if and the else statement both returned the same values.

This brings me to the first reason I don't really care about style guides.

### I've never had difficulty understanding what code does because of only the formatting.

![confused gif](dude.gif)

In my time, I've worked on some nasty codebases. Gone though some confusing logic to find hidden beasts. The troubles in these codebases has never been that I had a difficult time reading the code. The issues have been convoluted patterns, unclear naming, and similar issues.

### The benefit

![perfection gif](perfection.gif)

I'm as much of an artisanal code crafter as anyone. I always format things the same way, I like to align assignments when I can, and I like all the code I read to be the same way.

There's a visceral reaction to seeing code that is sloppy or just different from what you like or are used to. You want to feel at home in your codebase, and code written differently is a great way to not feel at home.

### Give a little empathy

![empathy gif](empathy.gif)

You can categorize the people who write code into three ways:

* Those who write it how you like
* Those who don't care how they write it
* Those who like to write it differently from you

If they don't care how they write it they'll probably be receptive to feedback. Give it to them and show them the examples already done and maybe help them set up a linter.

Many people will write code the way they always do, often just out of habit and nothing more.

```ruby
def my_method()
  puts("hello world")
end
```

I've seen many people write their ruby like that. To a rubyist that code will probably be like nails on a chalkboard.

Why on earth would they write it like that? Are they trying to impose something on you, dictating their way is better? Probably not.

They've probably just written python or java their whole life, and muscle memory is a hard thing to break. In some case decades of muscle memory can conflict with the style chosen by a particular company.

Try and see that for some people changing their style is a difficult thing that would require a lot of mental energy and focus that isn't on the actual content of the work they're producing.

### Distraction

![distraction gif](distraction.gif)

Style rules are distracting in code review for both the reviewer and the person who's code is being reviewed.

As noted above, the reviewer tends to focus on hunting down stylistic issues, glossing over the, often harder to detect, architectural issues. The same sort of thing happens frequently with micro-optimizations.

The distraction to the person who's code is being reviewed is even worse. In the best situation the developer has to context switch to the code just to change some spaces, and the like, once. In the worst the developer has to loop back many times to make tweaks because they're not all caught in one go, and that being the only source of feedback the developer gets frustrated with the lack of substantive feedback. Context switching is very expensive, it may be required sometimes, but there should be a high bar to requiring it.

### Tooling

![tooling gif](tooling.gif)

To properly maintain a style guide you'd ideally have a suite of tools to help with it. From a linter, to a CI suite to ensure conformity, and a bot to automate comments on code review.

All of these tools are great, but they require development, maintenance, and discussion. The tools break, sometimes read things wrong claiming lines have errors and prevent merge, even if they're fine.. Development takes time away from features. Discussion of new or existing standards lead to much discussion and consternation.

### All the costs

The costs laid out in this article are pretty high so I'd love to hear feedback on the benefits, maybe I undersold it, but looking at this article the costs massively outweigh the benefits. All of this leads me to ask everyone to not put effort into keeping your codebase in line. Besides, even without effort if you get a bunch of developers working in the same codebase, they'll all naturally start conforming to the same standard.

Just relax and enjoy the content of the code instead of judging it by its cover.
