## why angular in terms of directives?

- _html_ is great for declaring static content, not so much for declaring dynamic views in web apps.
- _angular_ lets u ***extend*** html vocabulary for your applications.

```
	ex:
		<ol>
			<list-item ng-repeat="item in list.items">
			</list-item>
		<ol>

		<list-item>   -----> that's angular directive

```

### how does ***<list-item>*** becomes actual html code

- once angular got hold of ***ng-app*** it got access to the entire document object model that was
  attached to that element. The Angular functions are then free to manipulate that tree of html nodes.

- it can then replace the variables surrounded by double curly braces with values it looks up in the
  dollar sign scope.

- it can ***also*** examine any node, be it content, tag or attribute and decide if it should replace it
  with something else, attach some functional behaviour to it, etc.

> compilation, meaning translating your source code into some other code that the machine can understand.

- ***compilation*** it's normally done before you actually execute your code.

- ***in angular*** the compilation most of the time happens at the beginning, when you load your page or
  a particular html template, and sometimes even later. But the process is all the same, Angular compiles and links your custom Html code.

### directive

- a marker on a DOM element that tells angular's html compiler to attach a specified behaviour to that 
  DOM element.

- a ***marker*** can be attribute, element name, comment or a CSS class. (not a best practice to use
  comments or css classes for directives).    
  Most of the time, directives are used for elements and attributes.

#### directive steps - similar to how you do controllers, services, and factories

- register directive (step 1)

```
	
	angular.module('app', [])
	.controller('MyController', MyController)
	.directive('MyTag', MyTag);

	//first parameter -> name as it will appear in html

	//second param => factory function - returns DDO (Directive Definition Object)
	//DDO lets angular know what to do when it finds that attribute.
	//The factory function will execute ONLY ONCE and NOT every time it finds the directive.


```

- create factory function (step2)

```
	

	MyTag.$inject = [ ... ];   //to inject other services, controllers, etc (as usual)

	function MyTag() {

		var ddo = {

			template: "Hello World"

		};

		return ddo; 
	}


	//everytime the MyTag is used, the world "Hellow World" is displayed


```



- use the tag on the html (step3)


```
	
	<my-tag></my-tag>

	//it normalizes the name by removing the dash "-" and capitalizing the first letter of the
	//second word. Camel-case notation.

```





















