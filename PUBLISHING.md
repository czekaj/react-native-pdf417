# Publishing Guide

This guide covers how to publish `@czekaj/react-native-pdf417` to npm.

## Prerequisites

1. **npm account**: Make sure you have an npm account at [npmjs.com](https://www.npmjs.com)
2. **npm login**: Authenticate with npm on your machine
3. **GitHub access**: Ensure you have push access to the repository

## Setup (One-time)

### 1. Login to npm

```bash
npm login
```

Enter your npm username, password, and email when prompted.

### 2. Verify your login

```bash
npm whoami
```

This should display your npm username.

### 3. Check if the package name is available

```bash
npm view @czekaj/react-native-pdf417
```

If you get a 404 error, the package name is available. If it shows package info, the name is taken.

## Publishing Process

### 1. Ensure everything is built and tested

```bash
# Install dependencies
yarn install

# Run tests
npm test

# Build the library
npm run prepare

# Test the example app
cd example
yarn install
cd ..
```

### 2. Update version and publish using release-it

The project is configured with `release-it` for automated releases:

```bash
# For a patch release (1.0.6 -> 1.0.7)
npm run release -- patch

# For a minor release (1.0.6 -> 1.1.0)
npm run release -- minor

# For a major release (1.0.6 -> 2.0.0)  
npm run release -- major

# Or let release-it prompt you for the version
npm run release
```

This will:
- ✅ Run tests
- ✅ Build the package  
- ✅ Update version in package.json
- ✅ Create git tag
- ✅ Create GitHub release
- ✅ Publish to npm
- ✅ Generate changelog

### 3. Manual publishing (alternative)

If you prefer manual control:

```bash
# Update version manually in package.json
# Then build and publish
npm run prepare
npm publish
```

## After Publishing

### 1. Verify the publication

```bash
npm view @czekaj/react-native-pdf417
```

### 2. Test installation

In a new project:

```bash
npm install @czekaj/react-native-pdf417
```

### 3. Update documentation

- Ensure README.md reflects the current version
- Update any documentation that references version numbers

## Troubleshooting

### Common Issues

1. **403 Forbidden**: You don't have permission to publish to this package name
   - Solution: Login with correct npm account or choose different package name

2. **Version already exists**: The version number already exists on npm
   - Solution: Bump the version number in package.json

3. **Build files missing**: The lib/ directory is missing
   - Solution: Run `npm run prepare` to build the package

4. **Tests failing**: Tests must pass before publishing
   - Solution: Fix failing tests with `npm test`

### Manual Version Bump

If release-it fails, you can manually bump versions:

```bash
# Update version in package.json
npm version patch  # or minor/major
git push --tags
npm publish
```

## Release Checklist

Before each release:

- [ ] All tests pass (`npm test`)
- [ ] Example app works (`cd example && yarn ios/android`)  
- [ ] README is up to date
- [ ] New features are documented
- [ ] Version number is appropriate (patch/minor/major)
- [ ] Git working directory is clean
- [ ] You're on the main branch

## Version Guidelines

Follow [Semantic Versioning](https://semver.org/):

- **Patch** (1.0.x): Bug fixes, no breaking changes
- **Minor** (1.x.0): New features, no breaking changes  
- **Major** (x.0.0): Breaking changes

## npm Package Link

After publishing, your package will be available at:
- npm: https://www.npmjs.com/package/@czekaj/react-native-pdf417
- Install: `npm install @czekaj/react-native-pdf417` 