export const data = [
  {
    id: 1, name: "Why I am unable to do login?",
    content: () => "After registration confirmation link has been send on your registered email.Check whether you have click on confirmation link or not.If you haven't received confirmation email then may be you have provided incorrect email address.",
    state: "active"
  },
  { id: 2, name: "Why I am not able to do registration?", content: () => "Fill your details as per data requirement.", state: "inactive" },
  {
    id: 3,
    name: "What is the functionality of 'Add details' button ,which is visible on dashboard?",
    content: () => "If you are new customer and you haven't added your other details like address,state,city and pincode.then only it is visible and activate otherwise it would be disable.",
    state: "inactive",
  },
  {
    id: 4,
    name: "Why is there one disable button on my dashboard?",
    content: () => "If you have added your other details like address,state,city and pincode.then you will see that disabled button on your dashboard.",
    state: "inactive",
  },
  {
    id: 5,
    name: "How do I got to know , My monthly electricity bill created or not?",
    content: () => "Once your montly electricity bill is created then you will received one email which notify you about your electricity bill.",
    state: "inactive",
  },
];