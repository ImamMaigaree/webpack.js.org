(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{377:function(n,s,a){"use strict";a.r(s),s.default='<blockquote class="tip">\n<p>This guide stems from the <a href="/guides/getting-started/"><em>Getting Started</em></a> guide.</p>\n</blockquote>\n<p><a href="https://www.typescriptlang.org">TypeScript</a> is a typed superset of JavaScript that compiles to plain JavaScript. In this guide we will learn how to integrate TypeScript with webpack.</p>\n<h2 id="basic-setup">Basic Setup<a href="#basic-setup" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>First install the TypeScript compiler and loader by running:</p>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev typescript ts-loader</code></pre>\n<p>Now we\'ll modify the directory structure &#x26; the configuration files:</p>\n<p><strong>project</strong></p>\n<pre><code class="hljs language-diff">  webpack-demo\n  |- package.json\n<span class="token inserted">+ |- tsconfig.json</span>\n  |- webpack.config.js\n  |- /dist\n    |- bundle.js\n    |- index.html\n  |- /src\n    |- index.js\n<span class="token inserted">+   |- index.ts</span>\n  |- /node_modules</code></pre>\n<p><strong>tsconfig.json</strong></p>\n<p>Let\'s set up a simple configuration to support JSX and compile TypeScript down to ES5...</p>\n<pre><code class="hljs language-json"><span class="token punctuation">{</span>\n  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"outDir"</span><span class="token operator">:</span> <span class="token string">"./dist/"</span><span class="token punctuation">,</span>\n    <span class="token property">"noImplicitAny"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">"module"</span><span class="token operator">:</span> <span class="token string">"es6"</span><span class="token punctuation">,</span>\n    <span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"es5"</span><span class="token punctuation">,</span>\n    <span class="token property">"jsx"</span><span class="token operator">:</span> <span class="token string">"react"</span><span class="token punctuation">,</span>\n    <span class="token property">"allowJs"</span><span class="token operator">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<p>See <a href="https://www.typescriptlang.org/docs/handbook/tsconfig-json.html">TypeScript\'s documentation</a> to learn more about <code>tsconfig.json</code> configuration options.</p>\n<p>To learn more about webpack configuration, see the <a href="/concepts/configuration/">configuration concepts</a>.</p>\n<p>Now let\'s configure webpack to handle TypeScript:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'./src/index.ts\'</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.tsx?$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token string">\'ts-loader\'</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    extensions<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">\'.tsx\'</span><span class="token punctuation">,</span> <span class="token string">\'.ts\'</span><span class="token punctuation">,</span> <span class="token string">\'.js\'</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'bundle.js\'</span><span class="token punctuation">,</span>\n    path<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'dist\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>This will direct webpack to <em>enter</em> through <code>./index.ts</code>, <em>load</em> all <code>.ts</code> and <code>.tsx</code> files through the <code>ts-loader</code>, and <em>output</em> a <code>bundle.js</code> file in our current directory.</p>\n<h2 id="loader">Loader<a href="#loader" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://github.com/TypeStrong/ts-loader"><code>ts-loader</code></a></p>\n<p>We use <code>ts-loader</code> in this guide as it makes enabling additional webpack features, such as importing other web assets, a bit easier.</p>\n<h2 id="source-maps">Source Maps<a href="#source-maps" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To learn more about source maps, see the <a href="/guides/development">development guide</a>.</p>\n<p>To enable source maps, we must configure TypeScript to output inline source maps to our compiled JavaScript files. The following line must be added to our TypeScript configuration:</p>\n<p><strong>tsconfig.json</strong></p>\n<pre><code class="hljs language-diff">  {\n    "compilerOptions": {\n      "outDir": "./dist/",\n<span class="token inserted">+     "sourceMap": true,</span>\n      "noImplicitAny": true,\n      "module": "commonjs",\n      "target": "es5",\n      "jsx": "react",\n      "allowJs": true\n    }\n  }</code></pre>\n<p>Now we need to tell webpack to extract these source maps and include in our final bundle:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">  const path = require(\'path\');\n\n  module.exports = {\n    entry: \'./src/index.ts\',\n<span class="token inserted">+   devtool: \'inline-source-map\',</span>\n    module: {\n      rules: [\n        {\n          test: /\\.tsx?$/,\n          use: \'ts-loader\',\n          exclude: /node_modules/,\n        },\n      ],\n    },\n    resolve: {\n      extensions: [ \'.tsx\', \'.ts\', \'.js\' ],\n    },\n    output: {\n      filename: \'bundle.js\',\n      path: path.resolve(__dirname, \'dist\'),\n    },\n  };</code></pre>\n<p>See the <a href="/configuration/devtool/">devtool documentation</a> for more information.</p>\n<h2 id="using-third-party-libraries">Using Third Party Libraries<a href="#using-third-party-libraries" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>When installing third party libraries from npm, it is important to remember to install the typing definition for that library. These definitions can be found at <a href="https://microsoft.github.io/TypeSearch/">TypeSearch</a>.</p>\n<p>For example if we want to install lodash we can run the following command to get the typings for it:</p>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev @types/lodash</code></pre>\n<p>For more information see <a href="https://blogs.msdn.microsoft.com/typescript/2016/06/15/the-future-of-declaration-files/">this blog post</a>.</p>\n<h2 id="importing-other-assets">Importing Other Assets<a href="#importing-other-assets" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To use non-code assets with TypeScript, we need to defer the type for these imports. This requires a <code>custom.d.ts</code> file which signifies custom definitions for TypeScript in our project. Let\'s set up a declaration for <code>.svg</code> files:</p>\n<p><strong>custom.d.ts</strong></p>\n<pre><code class="hljs language-typescript"><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"*.svg"</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> content<span class="token punctuation">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> content<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<p>Here we declare a new module for SVGs by specifying any import that ends in <code>.svg</code> and defining the module\'s <code>content</code> as <code>any</code>. We could be more explicit about it being a url by defining the type as string. The same concept applies to other assets including CSS, SCSS, JSON and more.</p>\n<h2 id="build-performance">Build Performance<a href="#build-performance" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<blockquote class="warning">\n<p>This may degrade build performance.</p>\n</blockquote>\n<p>See the <a href="/guides/build-performance/">Build Performance</a> guide on build tooling.</p>\n'}}]);