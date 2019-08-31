---
title: React as templates for your server side applications
date: '2019-05-09'
modifiedDate: '2019-05-16'
published: true
page: false
category: 'Article'
tags: ['React']
description: React has been used in desktop, mobile, web and VR development. In this article, we will see how it can be used in server side applications as templates.
---

You might have used several template engine along with your web frameworks. Common template engines used for websites are,

- `ejs`
- `jade`
- `jinja2`

For last few years, React has caught a lot of attention among developers through various framework.

In this article, we are going to discuss how react can be used as template engine.

## ReactDomServer

`ReactDomServer` has methods to help compile your react components as string or static HTML markup.
The methods are,

- renderToString
- renderToStaticMarkup

### renderToString

- `renderToString` creates and return HTML string out of your component passed to it.
- `renderToStaticMarkup` creates static Markup out of your component passed to it.

#### whats the difference 😅

Yes both does the same, there are few differences.

- Use `renderToStaticMarkup` to create static HTML without any react based markup added to it. It can be used as React to HTML conversion, static page generation from react etc.
- Use `renderToString` creates extra DOM attributes related to react and help the client side react to make use of it. It is widely used for Universal rendering. The first load happens from server through renderToString and then client side react make use of the attributes it generate and take over the control.

### What to use for template rendering 🤔

Depends on the need of your website, generally `renderToStaticMarkup` is faster and without any overload if you didn't want to use react in browser.

#### Example code

```javascript
/*
    - options are props from server to your react templates
    - component is your root component (eg., Layout of the page)
*/
let component = component.default || component;
let markup = ReactDOMServer.renderToStaticMarkup(
  React.createElement(component, options)
);
// whatever way you return HTML in your framework
return markup;
```

Hope this helps. Next time, you can choose react as your template engine for your server side rendered projects. 😎
