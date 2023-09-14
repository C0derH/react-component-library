# React Component Library

Simple Component Library I made with react.

## Introduction

In this project there is 4 components that takes props and according to that props it renders helpful styled components to the screen.

## Components

### Badge Component

The `Badge` component allows you to create badges with various shapes and colors.

#### Props

- `children`: The content to display within the badge.
- `color`: The color of the badge background.
- `shape`: The shape of the badge (e.g., "pill" for rounded).
- `className`: Additional CSS classes to apply to the badge.
#### Various Color For Badge
    <Badge color="red">Red Badge</Badge>
    <Badge color="yellow">Yellow Badge</Badge>
    <Badge color="green">Green Badge</Badge>
    <Badge color="blue">Blue Badge</Badge>
    <Badge color="indigo">Indigo Badge</Badge>
    <Badge color="purple">Purple Badge</Badge>
    <Badge color="pink">Pink Badge</Badge>
### Banner Component

The `Banner` component displays banners with different statuses and icons.

#### Props

- `title`: The title or header text of the banner.
- `text`: The main text content of the banner.
- `status`: The status of the banner ("success," "warning," "error," or "neutral").
- `className`: Additional CSS classes to apply to the banner.

### Card Component

The `Card` component renders cards with icons and content.

#### Props

- `children`: The content to display within the card.
- `icon`: The icon to display on the card.
- `iconBackgroundColor`: The background color of the icon.
- `cardClasses`: Additional CSS classes to apply to the card.

### Testimonial Component

The `Testimonial` component displays testimonials with quotes, names, and roles.

#### Props

- `quote`: The testimonial quote.
- `name`: The name of the person providing the testimonial.
- `role`: The role or title of the person.
- `logo`: An optional logo to display alongside the testimonial.

## Icons
Icons used in this project are sourced from Font Awesome.  You can find more icons and usage details on the [Font Awesome](https://fontawesome.com/).

For example, in the Banner component, icons from Font Awesome are used to represent different statuses:

FaCheckCircle for success status.
FaExclamationTriangle for warning status.
FaTimesCircle for error status.
FaInfoCircle for neutral status.
## Scrimba
    This project was a Scrimba solo project.Designs provided by scrimba. Check out scrimba for Awesome courses [Scrimba](https://scrimba.com/)
