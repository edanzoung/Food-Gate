# jquery.customSelect
dynamic Custom Select

## Live demo

http://bannss1.globat.com/demos/jquery.customSelect/

## Example
![Example](https://shurimages.com/u/hoNqEOI6ji.png)

## Usage

```
$.customSelect({
	identifier: 'demo',
	selector: '#countrySelect',
	placeholder: 'Select your country',
	options: [
		['ct', 'ct.png', 'Catalonia'],
		['es', 'es.png', 'Spain'],
		['gb', 'gb.png', 'Great Britain'],
		['de', 'de.png', 'Germany'],
		['it', 'it.png', 'Italy'],
		['fi', 'fi.png', 'Finland'],
		['fr', 'fr.png', 'France']
	],
	template: "<div class='jqcs_option' data-select-value='$0' style='background-image:url(example_icons/$1);'>$2</div>"
});
```


## Params

> **identifier** just an identifier to avoid problems if you use more than one customSelect in the same page.

> **selector** input (its type doesn't require to be hidden but you might want it to be) that will store the value selected. The select will be place right after it.

> **placeholder** text to show initially.

> **options** list of options for the select. Each option **must be an array**.

> **template** the html structure of each option. **Must contain the 'data-select-value' attribute** which will be the value sent.

**Note** arguments of options will be passed to template as **$**#. The argument **0** will be **$0**, **1** will be **$1** and so on.
