---
title: "Questions for Mark - Lead Developer"
description: "Questions for Mark - Lead Developer"
lead: "Questions for Mark - Lead Developer."
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  doks:
    parent: "scratch-pad"
weight: 630
toc: true
---

## Questions for Mark

### Invitation Questions
1.	Meeting now that I’ve joined TE
2.	Learning more about your daily routine/hassles/etc.
3.	High-ish level review of the platform from a Sr. Dev’s perspective

### Additional Questions
- Who are the current developers?
- semi-technical IT admins, on the banking/lending side
    - mortgage banks, are not very complicated or that technical
    - unaware of how to use APIs and customize the data being sent
    - singlular endpoints that take over core actions and then the other actions
    - loan attributes: and all aspects of that data, data is not really high level notation
    - oauth 2.0 security
        - create contacts and not update exisiting ones
        - store creds, they are their own identity providers within the application
    - they have to create maps to our data _(encompass: loan officer documentation and approval loan data - differs than banks)_
    - `ccffirst_name` they need to map that to their `First Name`
        - anything more complex than that, would be complicated for them
    - contact surveys, point in time details
        - send contact, get an ID, and then get a return
    - growing list of application developers, they want to extend these ideas, blend application portal, lead providers (real web developers)
        - company uses TE as a marketing tool
        - rarely taking our data, but doing something with their data with our platform; to make more sense of it
        - LOS data: 1yr after call;
        - campaign builders -> journey based (already basic rule based)
        - quarterly hackathons, to scrape the email data to see if the email is opened
        - opening to incoming lead sources (biggger effort)
        - "opportunities tracker", scans data for pricing data, and can send informative alerts (like you can save X per month)
            - sales boomering, they directly connect to credit bureaus, listing homes, building that integration

- Who do you want them to be?
- What painpoints might they have?
- What are their goals?
- How do they use our data?
- What data do we allow them to use?

## Examples
- https://github.com/raml-apis/Zillow/blob/master/api.raml