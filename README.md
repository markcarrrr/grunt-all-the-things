# grunt-all-the-things
-- 

##Grunt Tasks

### Grunt Modernizr

grunt-modernizr will crawl your project for Modernizr test references and save out a minified, uglified, customized version using only the tests you've used in your JavaScript or (S)CSS.  

Grunt task: <code>grunt modernizr</code>  

<strong>NOTE:</strong> If you comment out Modernzir specific tests in CSS or JS the Grunt Task will output as though the test is being used e.g.

<code>
	// .svg { foo: bar; }  
	.opacity { foo: bar; }
</code>

Both <code>.svg</code> and <code>.opacity</code> in the above example would be included in the Modernizr Grunt build so commented out Modernizr tests need to be removed before build or simply don't comment out Modernizr tests. Just to reiterate this applies to both JS and (S)CSS.

<h3>References</h3>
<dl>
	<dt>GIT</dt>
	<dd><a href="https://github.com/Modernizr/grunt-modernizr">grunt-modernizr</a></dd>
	<dt>Bower</dt>
	<dd><a href="http://bower.io/">http://bower.io/</a> (for latest full build of Modernizr)</dd>
</dl>
