<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

I found there is a bug when there are 3 level DTOs nested object. The swagger docs unable to show the attributes. In swagger docs, attribute 'others' actually should be showing attributes in fur-other.dto.ts attribute instead of a string in array of 'fur_types'. But when i try to change

```
 @ApiProperty({ type: FurOtherDto })
```
into 
```
@ApiProperty({ type: [FurOtherDto] })
 ```
the attributes in fur-other.dto.ts shows up. I believe this is a bug when showing nested object. I found this issue https://github.com/nestjs/swagger/issues/724 and i think, it hasn't been resolved yet. Thanks 


## Installation

```bash
$ npm install
```

## Steps

```bash
# development
$ npm run start:local

# open swagger documents
$ http://localhost:3000/api/docs/
```

## License

Nest is [MIT licensed](LICENSE).
