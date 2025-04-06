## Debugging Log
# Issue #1: <Header> component had title as undefined

Cause: title prop was not passed from <App>

Solution: Passed title={title} in <Header/>

# Issue #2: <Counter> was not updating count

Cause: setCount(count) was called instead of incrementing

Solution: Corrected to setCount(count + 1)