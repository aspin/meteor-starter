# Meteor Starter Kit
Directed questions or comments to me.

### Adding Meteor libraries

Search [Atmosphere](https://atmospherejs.com/) for relevant packages.

Bootstrap
```
meteor add twbs:bootstrap
```

Router
```
meteor add iron:router
```

### Create Meteor Starter Kit Project

```bash
mcreate_function() {
  git clone https://github.com/aspin/meteor-starter $1
  rm -rf $1/.git
  >$1/README.md
  echo "# $1" >> $1/README.md
}

alias mcreate=mcreate_function
```
