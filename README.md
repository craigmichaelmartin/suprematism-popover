# SuprematismPopover

An Angular 2 popover directive.


#### Installation
```bash
npm i -S CINBCUniversal/suprematism-popover
```
Until it is published to npm, point to github. A consequence of this is that built files must be checked-in. When we publish to npm with `npm publish`, there is a prehook to build the files and a posthook to delete them (so only source files are saved in git). For now, after doing development, we must manually run the build script and save the files.

#### View
- [Hosted on Github Pages](https://cinbcuniversal.github.io/suprematism-popover/)
- Run the example locally with `npm run example`


## Attibute Directives
- [`suprePopoverHeader`](#suprePopoverHeader)
- [`suprePopoverBody`](#suprePopoverBody)
- [`suprePopoverPosition`](#suprePopoverPosition)


#### <a id="suprePopoverHeader"></a> `suprePopoverHeader: string`
An attribute directive for the popover header text.


#### <a id="suprePopoverBody"></a> `suprePopoverBody: string`
An attribute directive for the popover body text.


#### <a id="suprePopoverPosition"></a> `suprePopoverPosition: PopoverPosition`
An attribute directive for the popover position, which defaults to 'top'.


## Example
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


## Implementation details
- This module extends (ng2-popover)[https://github.com/pleerock/ng2-popover],
  and uses bootstrap's popover scss.
- In both cases, these are implementation details that can be swapped out.
  The public api of the component / directive does not use either repo's api.
- Doing so this way allows us both a steadfast facade that we own (and whose
  implementation we can change as desired) while not re-inventing the wheel
  and missing the opportunity to inherit a wealth of usability, tests,
  bug fixes, etc from upstream at no cost.
