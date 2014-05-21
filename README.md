#jquijote
========

##JQuery Plugin to text generator for HTML templates. Use the literary work 'Don Quixote'.

### Usage

1. Load jQuery.
2. Load the flogin plugin.
3. Invokes the elements where you want to add text and indicates the number of letters.
 
### Example

```html
<!DOCTYPE html>
<html>
<head>
	<script src="js/jquery.min.js"></script>
	<script src="js/jquery.jquijote.js"></script>
</head>
<body>
	<section>
		<div id="element"></div>
		<textarea cols="30" rows="10"></textarea>
		<p class="sectionFull"></p>
		<p class="sectionFull"></p>
		<p class="sectionFull"></p>
		<p class="sectionFull"></p>
	</section>
	<script>
		$.fn.jquijote({
			'#element': 20,
			'textarea': 120,
			'.sectionFull': 12
		});
	</script>
</body>
</html>
```
