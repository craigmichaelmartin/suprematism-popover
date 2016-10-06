# SuprematismPopover

An Angular 2 popover directive.


### Installation
```bash
npm i -S CINBCUniversal/suprematism-popover
```
Until it is published to npm, point to github. A consequence of this is that built files must be checked-in. When we publish to npm with `npm publish`, there is a prehook to build the files and a posthook to delete them (so only source files are saved in git). For now, after doing development, we must manually run the publish prehook and save the files.


### Attibute Directives
- [`suprePopoverHeader`](#suprePopoverHeader)
- [`suprePopoverBody`](#suprePopoverBody)
- [`suprePopoverPosition`](#suprePopoverPosition)


#### <a id="suprePopoverHeader"></a> `suprePopoverHeader`
An attribute directive for the popover header text, accepting a string.


#### <a id="suprePopoverBody"></a> `suprePopoverBody`
An attribute directive for the popover body text, accepting a string.


#### <a id="suprePopoverPosition"></a> `suprePopoverPosition`
An attribute directive for the popover position, accepting 'top'|'right'|'bottom'|'left' which defaults to 'top'.


### Example
```html
<span
  suprePopoverHeader="How is that possible?"
  suprePopoverBody="The Browns have a history of losing to the bye week"
  suprePopoverPosition="right">
    The Browns are likely to go 0-17 this year.
</span>
```
Run the example locally with
```bash
npm run example
```


#### Acknowledgments
This repo draws extensively from the excellant https://github.com/pleerock/ng2-popover.  
As of now, it doesn't share the code (most of which should be), but because many methods are private, I cannot extend the class, nor do something like `PopoverContent.prototype.method.call(this, arguments)`. Also, I'm unsure how to wrap an angular class, otherwise I would have gone the route of creating a facade in front of ng2-popover.  
I'll keep thinking about how to implement this in a way that keeps ng2-popover as an upstream lib - where code can be shared/perfected together.


#### Implementation details
- As noted, heavily draws from ng2-popover until it can be used as an upstream lib.
- Uses bootstrap's popover scss. This allows us to inherit the wealth of bug fixes, tests, etc from upstream.
