# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- A feature where the complete scheme is shown as a JSON is at the end of the page but it is not functional.

- Basic authentication logic (w/o backend) is functional but not yet visible.

- A credit page for some free icons used is yet to be shown (https://www.flaticon.com/free-icon/dollar_550638).

- A delete button appears on the side of each file saved, this button is still not implemented.

## [0.0.3] - 2020-08-22

### Added

- Added a sider with all the configuration saved. For now it just defaults to local storage with some dummy titles.

- Added save button for configurations. You can save the title of your configuration for now, title is required.

### Changed

- Changed favicon for a more 'financial' look.

- Changed input placeholder from "Entity Name" to "Configuration Name".

## [0.0.2] - 2020-08-20

### Added

- Added a schema generator. This version lets you play with the properties of a table and its data according to antd documentation (https://ant.design/components/table/). You can also change the name of the entity. Saving is not yet supported. If the JSON is not valid then no changes are applied.

- Added a Header and a Layout based on a 'Holy Grail' design, minus the Footer.

### Changed

- Changed app title to "BUS Demo"

## [0.0.1] - 2020-08-17

### Security

- Run `npm audit fix` to fix all vulnerabilities

# Review

* Added for new features.
* Changed for changes in existing functionality.
* Deprecated for soon-to-be removed features.
* Removed for now removed features.
* Fixed for any bug fixes.
* Security in case of vulnerabilities.