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

---

###SVG sprite with PNG fallback
Grunt plugin to create SVG sprites with PNG fallback and (S)CSS file with image reference, sizes and coordinates. Images will be optimised as part of the grunt task also.  
			
Grunt task: <code>grunt sprite</code>  
			
<strong>NOTE:</strong> SVGs must be created at the correct size so the SVG and PNG are identical to match the (S)CSS coordinates output.  
			
####Naming convention:
The CSS naming convention is simply based on the filename e.g. naming a file icon--twitter.svg will result in the classname <code>icon--twitter</code>
			
####CAVEATS:
<ul>
	<li>If you need to animate and/or scale an SVG you will have to use a single file</li>
	<li>For hover effects include the hover state as a SVG and manually apply the CSS or use CSS <code>opacity</code>, possibliy use <code>background-color</code> depending on the how the icon is applied</li>
</ul>

####References
<dl>
	<dt>GIT</dt>
	<dd><a href="https://github.com/drdk/grunt-dr-svg-sprites">grunt-dr-svg-sprites</a></dd>
</dl>
