# dm-tool-rest-api-node
RESTful api for DM tool

#### Requirements
* NodeJS
* MongoDB

#### Initial Setup

```
$ npm intall
```

#### Running

```
$ npm start
```

### Schemas

#### Weapons
```
var WeaponSchema = new Schema({
    name: String,
    price: Number,
    damageType: String,
    type: String,
    range: String,
    hands: String,
    damage: String,
    critRange: String,
    critModifier: Number
});
```

#### Armors
```
var ArmorSchema = new Schema({
    name: String,
    price: Number,
    defenceMod: Number,
    type: {
      type: [{
        type: String,
        enum: ["light", "medium", "heavy"]
      }]
    }
});
```

#### Character
```
var CharacterSchema = new Schema({
    name: {
        type: String,
        requierd: "Your character needs a name"
    },
    alignment: {
        type: [{
            type: String,
            enum: ['LG', 'LN', 'LE', 'NG', 'TN', 'NE', 'CG', 'CN', 'CE']
        }]
    },
    gender: {
        type: [{
            type: String,
            enum: ['Male', 'Female']
        }]
    },
    race: {
        type: [{
            type: String,
            enum: ['Human', 'Elf', 'Dwarf', 'Halfling']
        }]
    },
    xp: {
        type: Number,
        default: 0
    },
    level: {
        type: Number,
        default: 1
    },
    str: {
        type: Number,
        default: 10
    },
    dec: {
        type: Number,
        default: 10
    },
    con: {
        type: Number,
        default: 10
    },
    int: {
        type: Number,
        default: 10
    },
    wis: {
        type: Number,
        default: 10
    },
    cha: {
        type: Number,
        default: 10
    }
});
``