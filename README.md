# Meteor Starter Kit
Direct questions or comments to kevinjchen94@gmail.com.

### Adding Meteor libraries

Search [Atmosphere](https://atmospherejs.com/) for relevant packages.

By default, the following packages are included:
 * `twbs:bootstrap`
 * `aldeed:simple-schema`
 * `aldeed:collection2`
 * `kadira:blaze-layout`
 * `kadira:flow-router`
 * `stevezhu:lodash`
 * `mdg:validated-method`

### Create Meteor Starter Kit Project

```bash
mcreate_function() {
  git clone https://github.com/aspin/meteor-starter $1
  rm -rf $1/.git
  echo "# $1" >> $1/README.md
}

alias mcreate=mcreate_function
```
