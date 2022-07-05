# DontNote

To run the application:

```
docker-compose up
```

### For devs:

1. Install `asdf` for versions management

2. Install node version spefied in `.tool-versions`

3. Make sure yarn is instaled running `yarn -v`. If not install it using `npm install --global yarn`.

4. Install packages locally with `yarn install`

5. Run `yarn husky install`, this makes so prettier is executed before commits

6. Profit!

The availble cli commands are in `package.json` scripts tag.

Run any command with `yarn run <command>`.
