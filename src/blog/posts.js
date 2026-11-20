// Blog posts. CommonJS (no import/export) so scripts/prerender-blog.js can
// require() this file at build time. Bodies use the markdown subset in ./markdown.js.

module.exports = [
  {
    slug: 'fishing-before-first-light',
    title: 'Nothing clears my head like a river before sunrise',
    subtitle: 'No phone, no work email, and a chinook on the line in the dark. Also, this season humbled me.',
    topic: 'Off the clock',
    date: '2026-11-20',
    coverWord: 'First light.',
    colors: ['#2E4A6A', '#C8825A'],
    body: `
Most of my week is screens. Code, agents, PRs, messages, more agents. My brain is basically a browser with 40 tabs open, and a few of them are playing audio and I can't find which ones.

The thing that closes all the tabs, for me, is standing in the middle of a river.

## The zoning out part

I don't really know how to explain it without sounding like a wellness influencer, but here goes. When you're waist-deep in moving water, casting, mending, watching your line drift, there's no room for anything else. You can't check your phone (it's zipped in a pocket, and if it falls in, that's on you). You can't answer a work email. You just watch the water.

After a couple of hours my head feels like someone defragged it.

Turns out there's some science behind this. A Stanford study had people take a 90-minute walk either in nature or along a busy road. The nature group [reported less rumination](https://ui.adsabs.harvard.edu/abs/2015PNAS..112.8567B/abstract), which is the loop where your brain keeps replaying the same worry, and they showed less activity in a brain area linked to it. The city-walk group didn't. I'm not saying fishing is therapy. I'm saying I'd believe it.

## Fighting a chinook in the dark

The best moment of my fishing year goes something like this. It's still dark. The sky is just starting to turn that deep blue. You've been casting for a while and you're half asleep, and then the line goes tight and suddenly you are *very* awake.

A chinook doesn't give up. It runs, it shakes its head, it heads for the fast water, and your reel makes that screaming noise that every angler loves and every neighbour would hate. You're trying to keep tension, not slip on the rocks, and not do anything dumb. By the time the sun actually comes up, your arms are shaking and you're grinning like an idiot.

There's nothing at work that feels like that. (Okay, finding a really nasty bug comes kind of close. Kind of.)

## Gear I've been loving

Not sponsored, I just like this stuff.

I've been wearing the **Patagonia Swiftcurrent waders** with **Simms Flyweight boots**, and the combo has been great. Light enough to walk into a spot, tough enough for scrambling over rocks at 5am when you can barely see your feet.

I've been on a real Patagonia kick lately, and part of that is one fleece in particular. It was handed down to me years ago and it still looks good. There aren't many things I own that I can say that about. When something lasts that long, you start trusting the brand a bit.

## This season, though

Okay, the real part.

This year was rough. The numbers just weren't there. DFO's outlook going into 2026 was [low for chinook and coho on the Fraser](https://watershedwatch.ca/stories/2026-salmon-forecast/), and by mid-season even the sockeye were coming back [well under the forecast](https://watershedwatch.ca/stories/2026-mid-season-fisheries-update/). You could feel it on the water.

And when the fish aren't there, the routine gets a lot harder to love. Let's be honest about what it actually takes. Alarm at 4am. Get the gear together in the dark. Drive out, walk in, and find a spot before the first cast at first light, because everyone else had the same idea. That's fun when you're catching fish. It's a lot less fun when you're not, especially as it gets colder heading into fall. My morale took a hit, I'm not going to pretend it didn't.

![Bear catching a jumping salmon in its mouth at a waterfall](https://media.giphy.com/media/ejkp6KcU5NwQw/giphy.webp "Me in 2025, apparently. ([via GIPHY](https://giphy.com/gifs/ejkp6KcU5NwQw))")

Last year was the complete opposite. 2025 was an odd year, which on the Fraser means the pinks come back (they run on a two-year cycle), and the sockeye run was big enough that anglers got a [rare chance to keep some](https://www.cbc.ca/lite/story/1.7615765). The fish were non-stop. It almost made me believe I was actually good at fishing.

![Angler on a dock losing control of his rod as it flies into the water](https://media.giphy.com/media/9sDNyvlqFxO09Ax5jO/giphy.webp "Me in 2026. ([via GIPHY](https://giphy.com/gifs/9sDNyvlqFxO09Ax5jO))")

I was not actually that good at fishing. I was fishing during a good year.

That's a weirdly useful thing to learn, and not just about fish. A great season makes everyone feel like an expert. A bad one tells you who actually knows the river. I'd like to be the second kind, so I guess I'll be out there again next year at 4am, getting humbled.

Anyway. If you see someone half asleep in an old Patagonia fleece in the middle of the river, say hi. Quietly. You'll scare the fish.
`,
  },
  {
    slug: 'reading-the-river-fraser-valley',
    title: 'Reading the river: tides, reports and a leader box that saves your morning',
    subtitle: 'How I figure out when the fish are coming in on the Fraser, and the small gear choices that keep them on the line.',
    topic: 'Off the clock',
    date: '2026-09-04',
    coverWord: 'Read the river.',
    colors: ['#2A4A5A', '#9A5B38'],
    body: `
Every fall, someone asks me "where's good right now?" and I never have a clean answer. Not because I'm hiding a spot (okay, sometimes), but because "good" changes by the day. Sometimes by the hour.

So here's what I actually check before I set an alarm for 4am, and how I set up my gear so a good morning doesn't turn into a story about the one that got away.

Quick note first: I'm not a guide, just a guy who fishes the Fraser Valley a lot. Always check the regs before you go. More on that at the bottom.

## Watch the tide, even on a river

This one surprises people. The lower Fraser is tidal. The ocean pushes back up the river further than you'd think, roughly up to Mission when the river is high and all the way toward Chilliwack when flows drop in winter.

Why should you care? Salmon don't just stream in at a constant rate. From what I've seen, fish staging near the mouth tend to move in with the tide, so a push of fresh fish often shows up downstream of you some time after a high tide. Figure out the lag for your spot, and you've basically got a schedule.

Even DFO thinks about it this way. Their [Albion test fishery](https://www.pac.dfo-mpo.gc.ca/fm-gp/fraser/albion-eng.html) near Fort Langley, which they use to track chinook and chum coming up the river, sets its nets twice a day, timed to the daily high tide. If the people counting fish for a living time it to the tide, I'm going to as well.

I check tide times on [tides.gc.ca](https://www.tides.gc.ca/) using the New Westminster station, then guess the lag for wherever I'm fishing. It's not exact. It's way better than nothing.

## Read the reports before you drive

My pre-trip routine, roughly in this order:

1. **DFO data and notices.** The Albion test fishery graphs show whether fish are actually moving through the lower river. [Fishery notices](https://notices.dfo-mpo.gc.ca/fns-sap/index-eng.cfm) tell you what's open, what's closed, and what changed this week. Things change mid-season, so check every time.
2. **Water level and clarity.** The Water Survey of Canada has [real-time levels and flows](https://wateroffice.ec.gc.ca/) for the Fraser (the Hope station is 08MF005), and the [BC River Forecast Centre](https://www2.gov.bc.ca/gov/content/environment/air-land-water/water/drought-flooding-dikes-dams/river-forecast-centre/current-and-forecast-streamflows) shows where it's heading. A big jump in level usually means dirty water. If it's chocolate milk, go bright and big, or go back to bed.
3. **Tackle shop reports.** Local shops post weekly reports, like [Pacific Angler's Friday fishing report](https://www.pacificangler.ca/blogs/learn). They talk to a lot of anglers, so they see patterns faster than any one of us.
4. **The sky.** Bright, flat sun on clear water makes fish spooky and lazy. Overcast days and that first hour of light are usually better. If the forecast says bluebird sky and the river is gin clear, I fish early, go lighter, and expect to work for it.

## Show up rigged

The worst way to lose the first hour of light is tying knots with cold fingers in the dark. So I prep at home.

I keep a box of **pre-tied leaders** with a bunch of beads already sorted by size and colour. When the bite changes or I snag up, I swap the whole leader in thirty seconds instead of rebuilding a rig on the bank.

And every float leader I tie gets an **egg loop knot**. Even if I'm planning to fish beads all day. You never know when someone on the bar is going to offer you some roe mid-trip, or you'll pick some up, and when that happens you want to be able to use it right away, not retie everything.

## Downsize the float setup

People overbuild their float rigs. Big swivels, heavy line, chunky everything. Fish can see it, and it also makes the whole setup drift less naturally.

I've been going smaller across the board: smaller swivels, lighter line, a more delicate float. It drifts better, it looks more natural, and honestly I think I get more bites.

## Line: mono for spring, fluoro for stealth

For the mainline on my float setup, I like **mono**. It stretches a bit, and that little bit of spring is a big deal when a fish shakes its head or makes a sudden run. It acts like a shock absorber, so you're less likely to pull the hook or pop the line. Fewer lost fish, less swearing.

For leaders, **10 lb is perfect** for me. 15 lb is still good if there are bigger fish around or the water is a bit coloured. Go heavier than that and you start to pay for it. Thicker line is easier to see, and in clear water a visible leader is how you spook the exact fish you woke up at 4am for.

![Angler fighting a fish from a boat at dawn](https://media.giphy.com/media/26u4mjYJyj1LaOtaM/giphy.webp "What the 10 lb leader is for. ([via GIPHY](https://giphy.com/gifs/26u4mjYJyj1LaOtaM))")

## For the fly rod

On the fly side, a couple of things made a real difference for me.

**Sink tips.** Salmon are usually holding near the bottom, and a floating line just swings your fly over their heads. A sink tip gets it down where they actually are. Match the tip to the depth and speed of the run.

**Regular fluoro as tippet.** Nothing fancy. Fluorocarbon is denser than water, so it sinks with the fly instead of fighting it, it's harder for fish to see, and it helps the leader turn over and lay out straight when you cast. Better presentation, fewer tangles.

## Links I actually use

- [DFO Albion test fishery](https://www.pac.dfo-mpo.gc.ca/fm-gp/fraser/albion-eng.html): is anything moving through the lower river?
- [DFO fishery notices](https://notices.dfo-mpo.gc.ca/fns-sap/index-eng.cfm): openings, closures and in-season changes
- [DFO Region 2 salmon limits](https://www.pac.dfo-mpo.gc.ca/fm-gp/rec/fresh-douce/region2-eng.html): what you can keep in Lower Mainland fresh water
- [BC freshwater fishing regulations](https://www2.gov.bc.ca/gov/content/sports-culture/recreation/fishing-hunting/fishing/fishing-regulations): the synopsis, licences and the non-salmon rules
- [tides.gc.ca](https://www.tides.gc.ca/): tide tables (I use New Westminster)
- [Water Survey of Canada](https://wateroffice.ec.gc.ca/): real-time river levels and flow
- [BC River Forecast Centre](https://www2.gov.bc.ca/gov/content/environment/air-land-water/water/drought-flooding-dikes-dams/river-forecast-centre/current-and-forecast-streamflows): where the river is heading

One last thing about the regs. As far as I know, salmon fishing in Region 2 is daylight-only (check how the regs define daylight), and the limits and openings change in-season, sometimes week to week. The notice that came out on Tuesday matters more than what you remember from last year.

See you on the bar. I'll be the one with way too many leaders.
`,
  },
  {
    slug: 'prove-it-testing-ai-work',
    title: 'Prove it: testing your work when AI wrote half of it',
    subtitle: 'My agents are very confident. That is not the same thing as being right.',
    topic: 'AI engineering',
    date: '2026-09-24',
    coverWord: 'Prove it.',
    colors: ['#9A5B38', '#3A2A3A'],
    body: `
If you've used a coding agent for more than a week, you've seen this message:

\`\`\`
✅ All done! The feature is fully implemented and tested.
\`\`\`

And you've opened the app, clicked the button, and watched nothing happen.

The agent isn't lying to you. It just had no way to check, so it guessed. The annoying part is that I do the same thing. I skim the summary, it sounds right, I move on. Two confident parties, zero tests run.

![Cartoon dog sitting calmly in a room on fire](https://media.giphy.com/media/UKF08uKqWch0Y/giphy.webp "Me and my agent, both very sure everything is fine. ([via GIPHY](https://giphy.com/gifs/UKF08uKqWch0Y))")

## The "it felt fast" problem

METR ran a study in 2025 that I think about way too often. They took experienced open-source developers, gave them real issues in their own repos, and let them use AI on some tasks and not others. The developers expected AI to speed them up by about 24%, and afterward they still felt like it had sped them up by about 20%. When METR measured it, [they were 19% slower](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/).

Okay, it's one study, the tools were early-2025 tools, and things have moved a lot since. But the gap between what it *felt* like and what actually happened is the bit that stuck with me. "This is going great" is a vibe. It's not a test.

(Security studies say roughly the same thing, by the way. People using AI assistants tend to write less secure code while feeling *more* sure it's secure. Fun.)

## So what do I actually do

Two things, and they're pretty different.

First, the code the agent wrote gets tested like any other code, just with less trust. Run it, run the tests, run the typecheck (the tool that catches "you passed a number where it wanted text" type mistakes). And the most useful trick: make the check part of the task. If the agent has a command it can run to prove it's done, "done" starts meaning something.

One small rule saved me a lot of grief. Compare against the main branch, not against perfection. If a test was already broken before the change, that's not this change's problem. If it passed before and fails now, it is. Once you do that, most of the red noise goes away and people stop ignoring test results.

Second, if the *feature itself* uses a model, normal tests aren't enough, because the output changes every time you run it. That's where evals come in. An eval is basically a fixed exam for your AI feature: a set of real examples, a clear idea of what a good answer looks like, and a score you can watch over time. Hamel Husain has a great post on this and his line is that failed AI products [almost always share one root cause: no real evaluation system](https://hamel.dev/blog/posts/evals/).

On a vision-LLM feature I helped ship, the decision of which approach to go with didn't come from a demo. We built a set of real tasks and ran the LLM approach against a plain rule-based one on the same scorecard. The LLM won. More importantly, we could say *where* it still lost, which is the part demos never show you.

A few things I'd tell past me:

- Always test against the boring option. If a simple rule gets you most of the way there, the model has to beat the rule, not beat nothing.
- Put cost in the eval. "2% better and 5x the price" is a business call, not a win.
- When you use a model to grade another model, check the grader sometimes. Model judges like long answers and answers that sound like themselves.

## The rule on my team now

It's boring. If you say it works, paste the test run. If you say it's better, show me the eval. If you say it's secure, tell me what you checked and what you didn't.

Nobody loves this rule. It catches stuff every week anyway.
`,
  },
  {
    slug: 'zoom-out-agents',
    title: 'Zoom out: your agents need a dashboard, not just a chat window',
    subtitle: "Running three agents in three chat tabs felt productive. Mostly I was scrolling up trying to remember who was doing what.",
    topic: 'AI engineering',
    date: '2026-10-02',
    coverWord: 'Zoom out.',
    colors: ['#C8825A', '#24303A'],
    body: `
Here's what my screen looked like for a good chunk of this year:

- **Tab 1:** refactoring the upload flow. I think?
- **Tab 2:** "All done!" (it was not done)
- **Tab 3:** waiting on an answer to a question it asked me 40 minutes ago, which I never saw because I was in tab 2.

I felt like an orchestra conductor. I was actually a guy scrolling up a lot.

![Person juggling balls while balancing on a board](https://media.giphy.com/media/ZpT6r2qFmjxdK/giphy.webp "Managing three agents through three chat tabs, basically. ([via GIPHY](https://giphy.com/gifs/ZpT6r2qFmjxdK))")

## Chat is great until there's more than one of something

When I'm designing something with an agent, the chat is perfect. It's where the thinking happens. But the second there are two or three pieces of work going at once, chat becomes a terrible way to know what's going on.

A chat transcript is the agent's version of events. What actually happened lives somewhere else: in the diff (the exact lines that changed), in the test results, in which branch the work is sitting on. And in the files that *should* have changed but didn't, which no summary will ever mention.

Long chats also get worse in a quiet way. Models are noticeably worse at using stuff buried in the middle of a long conversation than stuff at the start or the end. So the longer you steer one giant chat, the more you're leaning on the least reliable part of the model's memory. Cool cool cool.

## What I wanted instead

Basically the same thing you'd want for a team of people. You don't manage engineers by reading their DMs. You look at the board.

So I started setting things up like this. Each agent gets its own copy of the repo (a git worktree, which is like a second checkout of the same project that doesn't step on the first one), so no two agents ever touch the same files. Each task gets a little record that says who owns it, what branch it's on, what "done" means, and what's left. If a session crashes, the next one reads the record instead of me re-explaining my whole life story.

And then one screen that answers four questions:

1. Who needs me right now?
2. Who's stuck?
3. Who's done *and can prove it*?
4. Who only says they're done?

That last one is the important one.

## Not a new idea

Anthropic's post on building agents has a line I keep coming back to: [make the agent's planning steps visible](https://www.anthropic.com/engineering/building-effective-agents). Same post also says the teams that did best kept it simple instead of reaching for big frameworks. That matched what I saw. The fanciest setup I tried was the one I could see into the least. Worktrees, a task ledger and a dashboard was boring, and it was the one I trusted.

I still use chat for steering. I just stopped trusting it to tell me where things stand.

*Update, November 2026: this whole frustration is how [Bosun](/blog/bosun-agents-that-prove-it/) happened.*
`,
  },
  {
    slug: 'reviewing-agent-prs',
    title: 'Reviewing PRs when the agents wrote the code',
    subtitle: 'The PRs got huge. I stopped reading them line by line and started asking how the data moves.',
    topic: 'Leadership',
    date: '2026-08-19',
    coverWord: 'Read the flow.',
    colors: ['#7A4A6A', '#9A5B38'],
    body: `
I lead a small team and I review and merge every PR (pull request: the bundle of changes someone wants to add to the codebase). A year ago, reviewing meant reading the diff line by line. Now some PRs land with a few thousand lines across dozens of files, a lot of it written with an agent's help, and reading every line just... doesn't work anymore. My brain is the same size it was last year.

![Cartoon dog at a desk buried under stacks of papers](https://media.giphy.com/media/Kx92SUYb8m5HINJL8y/giphy.webp "When the PR description says “small refactor.” ([via GIPHY](https://giphy.com/gifs/Kx92SUYb8m5HINJL8y))")

For context, the old research says reviewers start [missing defects past about 400 lines](https://smartbear.com/learn/code-review/best-practices-for-peer-code-review/). We blew past that a while ago.

## The lines are usually fine

This was the weird part. When an agent writes the code, the individual lines are mostly fine. Syntax is right, names are reasonable, tests pass. The bugs aren't in a line. They're in how the pieces connect.

Google's code review guide has said this forever, to be fair: [the most important thing to look at is the overall design](https://google.github.io/eng-practices/review/reviewer/looking-for.html). AI just made it impossible to ignore.

## What I actually do when a giant PR shows up

**Step 1. I don't open the diff.** I open the description and ask for a diagram if there isn't one. Sometimes literally:

> me: before I review this, draw me how the data flows from the request to the database.

If the author (human or agent) can't draw it, that's already the review. If the diagram looks weird, I've found the problem before reading a single line.

**Step 2. Follow the data.** Where does it come from, where does it go, and who can touch it along the way. User input, model output, third-party APIs. Anything that crosses from "outside" to "inside" needs checking.

**Step 3. Break it on purpose (in my head).** What runs twice? What if two requests hit at the same moment? What if the process dies halfway through a write? Agents are great at the happy path. They write the sad path less often.

**Step 4. Check it against the ticket.** Agents are very good at doing *a* thing. Whether it's the thing we asked for is still my job.

**Step 5. Now** I read lines. But only the scary ones: auth, money, deletes, anything touching user data. Those get read slowly, every time, no exceptions.

## Security is where this matters most

Here's the kind of thing I mean. Say the prompts for an AI feature are built in the browser and sent to the server. Every line of that code can look perfectly fine. But anyone can open dev tools and edit the prompt. Moving prompts to the server, and pinning which version gets used, closes that hole. You won't find it by reading line by line. You find it by asking "where does this text come from, and who controls it?"

The OWASP list of top risks for LLM apps is a good checklist for this kind of review: [prompt injection, leaking sensitive data, giving the model too much power, no limits on spend](https://genai.owasp.org/llm-top-10/). Not one of those shows up as a bad line of code. They're all design problems.

## Keeping it sane

An automated reviewer goes first and checks the PR against the spec, so my attention is free for design. Tests have to be an actual recorded result, not "tests pass" typed in the description. And anything really big gets a ten-minute call with the diagram on screen, which beats an hour of me guessing what someone meant.

I miss the old line-by-line reviews a tiny bit. I don't miss them enough to go back.
`,
  },
  {
    slug: 'bosun-agents-that-prove-it',
    title: 'Bosun: I built the tool I kept wishing I had',
    subtitle: "A small open-source tool that runs coding agents in parallel and won't hand me their work until it can prove it holds up.",
    topic: 'Projects',
    date: '2026-11-19',
    coverWord: 'Bosun.',
    colors: ['#D9B36C', '#2A3A44'],
    body: `
On a ship, the bosun is the person who checks the crew's work before it reaches the captain. I'm the captain in this metaphor, which is generous. [Bosun](https://github.com/nkoda/Bosun) is the tool I built so that the work my coding agents hand me has already been checked.

![Pirate captain standing on the mast of a sinking boat as it reaches the dock](https://media.giphy.com/media/o0eOCNkn7cSD6/giphy.webp "Me, the captain, arriving to review the crew's work. ([via GIPHY](https://giphy.com/gifs/o0eOCNkn7cSD6))")

If you read my posts on [testing AI work](/blog/prove-it-testing-ai-work/), [zooming out from the chat](/blog/zoom-out-agents/) and [reviewing big PRs](/blog/reviewing-agent-prs/), this is where all three complaints turned into code. Agents said "done" when they weren't. I couldn't see three agents at once. Sessions died and took all the context with them. And big unproven PRs landed on me as the only line of defense.

## There are tools for this. So why build my own?

There are plenty of agent orchestrators and dashboards out there already, and some are good. I could have picked one. But honestly, why not build your own?

Okay, side note, because this is the real reason.

Before AI became the normal way to write code, my favorite part of this job was the grind. Debugging. Spending hours figuring out where a data object went bad somewhere between step three and step seven, or why a pipeline that should take minutes was taking an hour. When you finally find it there's this little hit of satisfaction that nothing else at work gave me.

When agents started writing most of the code, a lot of that went away. The puzzles moved. They weren't in the code anymore. They were in how the agents worked together, and how much I could trust what they told me.

Bosun is where I found that fun again. It's my project, so I can try weird ideas, break everything, and start over, without risking my company's tickets and features. Same joy as debugging used to be. Just one floor up.

## How it works (the short version)

Bosun sets up a "fleet" folder next to your repo with a few workers in it. Each worker is its own git worktree, a separate checkout of the same project, so two agents never edit the same copy of the code. An agent claims a free worker, and before touching anything it has to agree on a short brief with me: what we're doing and what "done" means.

Then it works, and when it thinks it's finished, Bosun runs my checks (tests, typecheck) on the branch *and* on the commit the branch started from. Only *new* failures block it, so an old broken test on main doesn't hold everything hostage. The result gets recorded against the exact code, uncommitted changes included. Change one line after the tests run and the pass doesn't count anymore.

After that, a fresh Claude reviews the work against the brief. Blocking issues go back to the agent, for a capped number of rounds, and then a human decides. (Me. I decide.) Every task keeps a record of its branch and notes, so if a session dies the next agent picks up where the last one stopped. There's also a small VS Code dashboard that shows which workers need me.

## The one thing that surprised me

Agents will happily prove their work if proving it is one command. If it's a ritual, they skip it. So will people, to be fair. Most of the design ended up being about making the check so cheap that skipping it would be weirder than running it.

It's still early, and it leans on Claude Code internals that can change between releases. I use it across three codebases and a coworker uses it too. If you run more than one agent at a time, [poke around the repo](https://github.com/nkoda/Bosun). Issues welcome. Weird ideas especially welcome.
`,
  },
  {
    slug: 'ai-as-a-gasket',
    title: 'Use AI as a gasket, not an engine',
    subtitle: 'Let the model turn your messy thinking into something structured, once. Then let boring code do the rest.',
    topic: 'AI engineering',
    date: '2026-07-16',
    coverWord: 'The gasket.',
    colors: ['#9A5B38', '#4A3A2A'],
    body: `
My first drafts of anything are a mess. Half sentences, three ideas fighting each other, a note that just says "auth??".

What I've started doing is dumping that mess on a model and asking it to hand me back something with edges. A brief. A list of acceptance criteria. A JSON object with fields I picked. Then I stop using the model, and normal code takes over.

I call this using AI as a gasket. A gasket is the squishy seal between two rigid engine parts that don't quite fit. It doesn't do the work. It just stops the leaking. My brain is one rigid part (rigid in the wrong ways, mostly). The codebase is the other.

![Rubber duck in sunglasses holding a roll of tape](https://media.giphy.com/media/l4XLydz8NOLxop8Z1R/giphy.webp "The model, sealing the gap between my notes and the codebase. ([via GIPHY](https://giphy.com/gifs/l4XLydz8NOLxop8Z1R))")

## Same answer every time vs. maybe not

Normal code is deterministic. Same input, same output, forever. You can test it, cache it, diff it, roll it back.

A language model is probabilistic. Even with the randomness turned all the way down, it can still give you different answers to the same question. Thinking Machines Lab dug into this and found a big reason is boring server stuff: how many requests get batched together changes the order the GPU does its math in. In their test, [1,000 runs of the exact same prompt gave 80 different outputs](https://thinkingmachines.ai/blog/defeating-nondeterminism-in-llm-inference/). Same prompt! Eighty answers!

That's fine for brainstorming. It's less fine for something that runs a thousand times a day, where you're paying for tokens every single time and getting a slightly different result every single time.

## What the gasket looks like in practice

The pattern is: one fuzzy step at the edge, then boring steps forever after.

The example I use the most is briefs. Before an agent writes any code, it has to turn my rambling task description into a short brief with a goal and acceptance criteria, and I have to agree with it. From then on, everything gets checked against that brief: the tests, the reviewer, me. The fuzzy part happened once, at the start, in a place where I could look at it.

Some other versions of the same idea:

- Messy document in, JSON out (matching a schema you wrote), then plain code processes the JSON. Most model APIs can now force the output to match your schema, so you're never parsing a paragraph. You still need to check the *values* in code, though.
- Ask the model to write a parser or a set of rules once. Read it. Test it. Then run that code on every input with zero model calls.

You pay for the thinking once instead of every time. It's cheaper, it's faster (code runs in milliseconds, model calls take seconds), and when something goes wrong you can actually find out why.

## When it *should* be the engine

Sometimes the problem really is fuzzy every single time. Looking at an image and understanding it. Writing for a specific person. Judging something subjective. Then the model belongs in the loop, and your job becomes evaluating it properly.

But a lot of "AI features" I've seen are one fuzzy step followed by ten very normal ones wearing an AI costume. Pull the fuzzy step out to the edge and the other ten get a lot easier to live with.

*Update, November 2026: the brief idea ended up at the core of [Bosun](/blog/bosun-agents-that-prove-it/).*
`,
  },
  {
    slug: 'quantization-tradeoffs',
    title: 'Quantization, or how to fit a giant model in a small box',
    subtitle: "You can shrink a model's memory by 3 to 4x. Here's what you give up, explained without a PhD.",
    topic: 'AI engineering',
    date: '2026-11-05',
    coverWord: '4-bit.',
    colors: ['#4A6A7A', '#9A5B38'],
    body: `
Some questions I keep seeing, mostly from people who just tried to run an open model on their own machine and got an "out of memory" error. Here's what I'd say.

## "Why is the model so big?"

A model is basically a giant pile of numbers (the weights). Billions of them. The size of the model is roughly how many numbers it has times how much space each number takes.

Normally each number takes 2 bytes. So a 70-billion-parameter model is about 140 GB just for the weights. Your laptop does not have 140 GB of GPU memory. Mine definitely doesn't.

## "So what's quantization?"

Storing each number with fewer bits. Think of it like saving a photo as a smaller JPEG. You keep most of the picture and lose some fine detail.

At 8 bits, each number takes 1 byte, so the model is half the size. At 4 bits, half a byte, so roughly a quarter. That 140 GB model becomes about 35 GB. Real files come out a little bigger because the format stores some extra info to unpack the numbers. The llama.cpp docs list Llama 3.1 8B at [about 15 GiB at full size and about 4.6 GiB at their popular 4-bit setting](https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md), which works out to closer to 5 bits per number in practice.

![Cartoon hand pressing a big button on a shrink ray control panel](https://media.giphy.com/media/3ohuPtAh7wNSCe9Wdq/giphy.webp "Me, trying to fit 140 GB into a laptop. ([via GIPHY](https://giphy.com/gifs/3ohuPtAh7wNSCe9Wdq))")

That's the difference between "needs a server" and "fits on one graphics card". Pretty magical.

## "What's the catch?"

There are three, and the first one is the obvious one.

**You lose some quality.** Fewer bits means less precision. The good methods are smart about which numbers matter most and keep the loss small, especially at 8 bits. One big study ran [over 500,000 evaluations on Llama 3.1](https://arxiv.org/abs/2411.02355) and found 8-bit formats were close to lossless, and 4-bit was surprisingly competitive.

But (and this is the part people skip) the loss isn't even across tasks. Hard stuff like competition math and multi-step reasoning gets hurt a lot more than easy stuff. Smaller models get hurt more than big ones. Going below 4 bits is where things get rough.

**You have to test it yourself.** Because the damage depends on your task and your model, a general benchmark doesn't tell you much. You need to run *your* tests on the shrunk model. If you don't have tests for your AI feature, you won't even know what you lost. ([I have feelings about this.](/blog/prove-it-testing-ai-work/))

**It's not always faster.** This one surprises people. Usually smaller weights mean faster responses, because the bottleneck is moving numbers around in memory. With good 4-bit code you can get close to 4x faster when you're handling a few requests at once. But when you're serving lots of requests together, the bottleneck shifts to the actual math, and the speedup shrinks a lot. Some older methods were even slower than the full-size model because of the extra work to unpack the numbers.

## "So what should I do?"

If it doesn't fit, try 8-bit first. It's close to free. If it still doesn't fit, try 4-bit with a well-known method and then run your own tests before you trust it. If you're doing hard reasoning or math, or using a small model, be careful going lower. And if you're serving real traffic, measure speed with real traffic, not one request at a time.

It's one of the best tricks in the whole field for running models cheaply. You just pay for it somewhere else, and it's better to know where.
`,
  },
  {
    slug: 'aws-cost-attribution-bedrock',
    title: 'AWS will tell you what you spent. Not who spent it.',
    subtitle: 'Why I ended up metering every LLM call myself, even though AWS has gotten better at this.',
    topic: 'Cloud',
    date: '2026-10-16',
    coverWord: 'Untaggable.',
    colors: ['#C8825A', '#2E2A3E'],
    body: `
If you run AI features on Amazon Bedrock (AWS's service for calling models like Claude) for more than one team or customer, someone will eventually ask you: "How much did *this* user cost us?"

And you'll open the AWS bill, confident that tags will answer it.

They won't.

![Money counting machine flipping through stacks of cash](https://media.giphy.com/media/W9ncJSZLi36PC/giphy.webp "AWS, counting. Just not telling you whose money it is. ([via GIPHY](https://giphy.com/gifs/W9ncJSZLi36PC))")

## How tags normally work

AWS cost tags stick to *things*. A server, a storage bucket, a function. You tag the thing, turn the tag on in Billing, and costs get grouped by tag. Works great when one thing belongs to one team.

Model usage isn't a thing. A thousand users call the same model through the same API, and you're charged for tokens (chunks of text going in and out), not for something you own. There's nothing per-request to stick a tag on.

AWS's answer for a long time was "application inference profiles". You wrap a model in a profile, tag the profile, and costs for calls through it get that tag. Fine! Except each profile only covers one model. So it's one profile per model, per team, per whatever you want to track. AWS's own docs [steer you away from making one per user](https://docs.aws.amazon.com/bedrock/latest/userguide/cost-mgmt-application-inference-profiles.html), and I get why. Imagine having a thousand of them. Imagine adding a new model.

(Provisioned Throughput, where you rent dedicated model capacity by the hour, can be tagged as a whole. You still can't split it between the people sharing it.)

## To be fair, AWS got better

In April 2026 AWS added [cost allocation by IAM user and role for Bedrock](https://aws.amazon.com/about-aws/whats-new/2026/04/bedrock-iam-cost-allocation). Bedrock now records *who* made each call, and you can tag those identities. Real improvement.

Then I read the fine print. Most apps call Bedrock from one backend service, so every call comes from the same identity. To get per-user costs, you have to [give each user their own short-lived role session](https://docs.aws.amazon.com/bedrock/latest/userguide/cost-mgmt-faq.html), cache those credentials, and stay under the rate limits for creating them. That's a lot of machinery for a billing report.

And the core problem is still there. AWS's own FAQ says the cost reports [aggregate over an hour or a day, and neither carries a per-request identifier](https://docs.aws.amazon.com/bedrock/latest/userguide/cost-mgmt-faq.html). The extra metadata you can attach to a Bedrock call goes to the logs, not the bill.

## So I metered it myself

When I designed an LLM gateway at work, we needed per-user and per-team spending caps that stop a call *before* it goes over budget. A bill that shows up hours later, rolled up by day, can't do that. You can't enforce a limit with data you get tomorrow.

So every model call goes through one place. Before the call, the gateway checks the caller's spend against their cap. If the check fails, or can't run at all, the call is blocked. It fails closed, because "the budget check was down so we let everything through" is not a sentence I want to say to anyone. After the call, it logs what that call actually cost, based on the token counts that come back.

AWS describes [nearly the same setup](https://aws.amazon.com/blogs/machine-learning/cost-tracking-multi-tenant-model-inference-on-amazon-bedrock) for multi-tenant apps, which was a little validating. One warning from their FAQ that's worth repeating: numbers you calculate from logs won't include discounts or committed pricing unless you add them yourself. So if you meter it yourself, check your totals against the real bill now and then.

The bill tells you what happened last month. It can't stop a request right now. For that you need your own meter.
`,
  },
  {
    slug: 'beat-google-maps',
    title: 'How to beat Google Maps (and what it says about timing the market)',
    subtitle: 'Maps gives you the best route for the average driver. Knowing your road gets you a better one.',
    topic: 'Off the clock',
    date: '2025-07-12',
    coverWord: 'Ball knowledge.',
    colors: ['#3A5A4A', '#C8825A'],
    body: `
I drive Highway 1 through Vancouver a lot, and at some point I got weirdly competitive with Google Maps about it. It gives me a route and an ETA. I take the same route, but with a lane plan in my head, and I usually beat the ETA.

Maps isn't bad at this. It's really good. Google says it mixes [historical traffic patterns with live conditions](https://blog.google/products/maps/google-maps-101-how-ai-helps-predict-traffic-and-determine-routes/) and gets the ETA right for over 97% of trips. That's an incredible number.

But Maps is optimizing for everyone. I only care about me.

## What Maps doesn't know

Maps thinks in road segments. It knows the highway is slow. It doesn't tell you which *lane* is slow, or why it's slow today and not last Tuesday.

There's also a funny theory problem. When everyone takes their own fastest route, traffic settles into a state where nobody can do better by switching alone, and that state is usually worse for everybody than if we'd all coordinated. Economists call the gap "the price of anarchy", which is also how I'd describe the Highway 1 merge at 8am.

So Maps gives you the herd's best answer. That's a great default. It's just never going to be better than the herd.

## Ball knowledge

"Ball knowledge" is sports slang for actually knowing the game, not just reading the box score. For a road, it's knowing the patterns.

Here's mine for Highway 1 westbound on a winter weekend, or a summer one when the Whistler bike park is open. A lot of that traffic is heading for the Ironworkers bridge, then North Van or up the Sea-to-Sky to Whistler. Whistler itself says peak traffic is [Friday afternoons, weekends and holidays](https://www.whistler.com/getting-here/road/conditions), and you can feel it.

So:

1. I stay in the far-left lane until the Grandview exit. The right side is a mess of people merging and exiting.
2. Then I move to the middle lane through the First Avenue exit, because a lot of people heading into the city peel off there and I don't want to be stuck behind them.
3. Right before my exit, I slide over to the far-right lane. By then the left and middle lanes are backing up with everyone headed for the bridge.
4. And I watch that right lane carefully, because some people use it to jump the Whistler line and cut back in at the last possible second. Leave them room. It's not worth it.

![Jeep on tall stilts driving straight over a line of stopped cars](https://media.giphy.com/media/CZDVvQn78njFu/giphy.webp "Me in the far-right lane, probably. ([via GIPHY](https://giphy.com/gifs/CZDVvQn78njFu))")

Totally my own theory, no official source, and it does not always work. Some days the whole highway is just a parking lot and ball knowledge means nothing. But on a normal ski Saturday it's worth a few minutes, and a few minutes on Highway 1 feels like an hour.

## Okay, the stocks part

The same thing shows up every time someone talks about timing the market.

An index fund is Google Maps. It's the average of everybody, and the average is genuinely good. Most professional fund managers [don't beat it over the long run](https://www.spglobal.com/spdji/en/research-insights/spiva/), and they do this for a living. Buy it, leave it alone, and you get the herd's result, which is a pretty good result.

Timing the market is the lane plan. Get in before the run-up, get out before the drop, switch lanes right before everyone else does. And everyone thinks they have ball knowledge here. Almost nobody does.

The difference is where the knowledge comes from. My Highway 1 plan comes from driving that stretch over and over and watching the same pattern show up every ski season. A hot tip from a group chat isn't that. It's just the herd with extra steps, and usually a few weeks late.

So my rule is boring: take the average by default, and only switch lanes on a road you actually know. (Not financial advice. I'm a guy with a lane plan.)
`,
  },
];
