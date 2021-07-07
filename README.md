# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- [Framer Motion](https://www.framer.com/motion/) - For modal animation

### What I learned

First and I foremost, I learnt how to conditionally render CSS styling inline within React. I've been struggling to set a proper grid styling when the user search for one country, because initial grid display setting was stretching the country section for the entire page. I found that conditional rendering provides the optimal solution for this issue, as can be seen below:

```jsx
  <StyledContainer
      style={{
        gridTemplateColumns:
          countries && countries.length > 4
            ? "repeat(auto-fit, minmax(250px, 1fr))"
            : "repeat(4, minmax(300px, 1fr))",
      }}
    >

    ...code

  <styledContainer />
```

Furthermore, I learnt how to make a div element more accessible via the "Tab" key by using the "role", "aria-pressed", and "tab-index" attributes on the relevant divs. Snippets can be seen below:

```jsx
<div
  className="option"
  onClick={selectOption}
  role="button"
  aria-pressed="false"
  tabIndex="0"
  onKeyPress={handleOptionKeyPress}
>
  All
</div>
```

Another thing to add is CSS spinner loader. This was my first time using it on a personal project, turned out it was really easy to implement with conditional rendering.

```jsx
<div className="img-container">
  <div style={{ display: loader ? "flex" : "none" }} className="loader">
    <div className="spinner"></div>
  </div>

  <img
    src={country.flag}
    alt="flag"
    onLoad={() => setLoader(false)}
    style={{ display: loader ? "none" : "block" }}
  />
</div>
```

Lastly, I finally manages to get my hands dirty with fetching data from an API using useEffect hook, and displaying the error message when the term user searched for does not exist.

```jsx
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(apiUrl, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("The country that your for searched for does not exist");
        }

        return res.json();
      })
      .then((data) => {
        setCountries(data);
        setError(null);
      })
      .catch((err) => {
        setError("The country that you searched for does not exist");
      });

    return () => abortCont.abort();
  }, [apiUrl, setCountries]);

  return (
    {error && <h2>The country you searched for does not exist</h2>}
  )
```

### Continued development

I have no further planning to develop this app, for now it shall stands as it is.

### Useful resources

- [Conditional rendering CSS in React](https://stackoverflow.com/questions/48748645/conditional-rendering-of-css-style-in-elements-react) - This particular thread helped me in figuring out what went wrong when I first tried to conditionally render the CSS.

- [Make div element accessible](https://stackoverflow.com/questions/32659099/making-a-clickable-div-accessible-through-tab-structure) - This one helped explain more about tab structure and web accesiblity. It's great read for every dev, as accessibility should not be an option.

- [How to make CSS Spinner loads in React](https://stackoverflow.com/questions/64589758/how-to-load-a-css-spinner-over-my-react-component-with-opacity-of-0-7) - My favourite thread ever, is this. Simply because I've been scratching my non-existent itches on my head for an infinite number of times, and this thread clears everything up on the issue. Simply said, it is easy to implement.

## Author

- Frontend Mentor - [@akaahl](https://www.frontendmentor.io/profile/akaahl)
- Twitter - [@akaahl1](https://twitter.com/akaahl1)

## Acknowledgments

I would like to thank the whole peeps at the FEM community, StackOverflow patrons, and FEM itself for providing intriguing yet challenging projects. This community is the best!
