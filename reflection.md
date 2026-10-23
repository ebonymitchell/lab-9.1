## Reflection Questions

**1. How did you handle optional props in your components?**

I used the `?` symbol in my TypeScript interfaces to identify props that weren't required. I also used default values for some props, like `showEmail` and `showRole`, so the information would display unless I specifically set those values to `false`. For callback functions, I used conditional rendering so buttons would only appear when the corresponding function was provided.

**2. What considerations did you make when designing the component interfaces?**

I wanted each component to have a clear purpose and be reusable with different data. I used interfaces to define the information each component needed and separated required props from optional ones. I also tried to keep the components flexible by including options for additional content and user interactions.

**3. How did you ensure type safety across your components?**

I used TypeScript interfaces to define the expected data types for each component's props. For example, I defined the `price` property as a number and used a union type to limit the AlertBox `type` prop to specific values. This helped TypeScript identify mistakes when incorrect types were used. I also ran `npm run build` to check for TypeScript errors and corrected the issues it identified.

**4. What challenges did you face when implementing component composition?**

My biggest challenge was understanding how the different pieces of the application worked together. I was still getting comfortable with passing props, using `children`, and understanding how callback functions communicate between components. I also ran into issues with incorrect import paths and project configuration, which caused build errors. I worked through those errors by checking my file structure, correcting the imports, and running the build again to make sure everything worked. I still need more practice, but the assignment helped me better understand how React components connect.