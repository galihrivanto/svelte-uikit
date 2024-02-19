<div align="center">
  <h1>Svelte UI Kit</h1>
  
a reusable UI Kit for svelte based project
</div>

## **Description**
This project aims to provide a reusable UI kit tailored for Svelte-related projects. To ensure consistency and efficiency in design and development, it adopts Daisy UI as the reference for system design. Additionally, the project leverages Bits-UI for its component structure. 

## **Install dependencies**
Run the following command to install dependencies
```bash
npm i
```

## **Run preview**
Run the project to see the preview
```bash
npm run dev
```
The component usage example can be seen on `src/routes/+page.svelte`

## **Packaging**
If you have done updating or adding component, you can update the npm link package by running 
```bash
npm run package
```

## **Importing this package**
You need to execute the following command if you want to use or if it's already used but can't detect the package
```bash
npm link @wja-dev/svelte-uikit
```
Usually it's already there on postinstall (after `npm install` is executed)