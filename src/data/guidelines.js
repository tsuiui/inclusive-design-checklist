export const guidelines = {
  "2.2.2": {
    link: "https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html",
    title: "Pause, Stop, Hide",
    impact: "Critical",
    impactScore: 4,
    goal:
      "Some users may struggle with web page distractions and as such we must take measures to reduce moving, blinking, or scrolling content.",
    solution:
      "Any moving, blinking, or scrolling content in our user interfaces must provide a method for the user to pause, stop, or hide the content. If the movement is vital to the component we can provide a way for our users to alter the frequency of motion.",
  },
  "3.2.3": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html",
    title: "Consistent Navigation",
    impact: "Moderate",
    impactScore: 2,
    goal:
      "We should present our content in a consistent and recognizable manner. Many users rely on the familiarity of our user interfaces and as such we must be cognizant to display layouts and components consistency.",
    solution:
      "When using navigation within our web pages we must preserve the order of navigation unless the user explicitly alters the layout.",
  },
  "1.1.1": {
    link: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html",
    title: "Non-Text Content",
    impact: "Critical",
    impactScore: 4,
    goal:
      "Occasionally we must present information in a non-textual manner, but this poses a problem to users navigating your site with an assistive technology or with visual impairments. Many users rely on text alternatives for images and other non-textual content. These text alternatives can subsequently be presented to users through visual, tactile, or auditory manners.",
    solution:
      "Any non-textual element or component which requires user input or interaction must contain a text alternative describing the element or component's purpose.",
  },
  "2.4.3": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html",
    title: "Focus Order",
    impact: "Moderate",
    impactScore: 2,
    goal:
      "Many users rely on keyboards to navigate web pages so we must present our content in a logical order. As the user navigates through our application with a keyboard, the path must be sequential.",
    solution:
      "Any component or element which captures keyboard focus  must capture this focus in a logical order within the webpage focus sequence.",
  },
  "2.4.4": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html",
    title: "Link Purpose",
    impact: "Moderate",
    impactScore: 2,
    goal:
      "Clicking a link and navigating to another part of a website or a completely new website can be distracting to our users. As a result, users should be able to discern the purpose of all links in our applications. This allows them to quickly decide whether to follow the link, preventing unnecessary distractions.",
    solution: "Each link text should clearly indicate its purpose.",
  },

  "3.2.1": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html",
    title: "Consistent Behavior Receive Focus",
    impact: "Major",
    impactScore: 3,
    goal:
      "The focus order of our components should be presented in a logical manner.",
    solution:
      "A component which receives focus should not break our users' concentration by changing contexts.",
  },
  "3.2.2": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-unpredictable-change.html",
    title: "On Input",
    impact: "Moderate",
    impactScore: 2,
    goal:
      "When entering data or interacting with a form element, the element behaves expectedly.",
    solution:
      "We shouldn't change the default or expected behavior of form components unless our users have been explicitly notified that the application context will change.",
  },

  "2.4.7": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html",
    title: "Focus Visible",
    impact: "Major",
    impactScore: 3,
    goal:
      "Users should quickly and easily be able to recognize where the keyboard focus is within a user interface.",
    solution:
      "Any focusable element within a web page can be easily discerned.",
  },
  "3.3.1": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html",
    title: "Error Identification",
    impact: "Major",
    impactScore: 3,
    goal:
      "Users should be clearly informed that an error has occurred and be able to determine what went wrong.",
    solution:
      "Any form elements which allow user input and require a particular format or entry type should have clearly defined error messages when an error arises.",
  },
  "3.3.2": {
    link: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html",
    title: "Labels Or Instructions",
    impact: "Major",
    impactScore: 3,
    goal:
      "Form elements should contain clear labels or instructions which indicate the expected input type or format.",
    solution:
      "Form elements requiring a specific data format or types should be clearly communicated through labels or instructions.",
  },
  "3.3.3": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html",
    title: "Error Suggestion",
    impact: "Moderate",
    impactScore: 2,
    goal:
      "If our users incorrectly enter data into a form field we must provide clear instructions on how to fix said issue.",
    solution:
      "Clear instructions are presented to the user when incorrect form data is entered.",
  },
  "3.3.4": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible.html",
    title: "Error Prevention (Legal, Financial, Data)",
    impact: "Critical",
    impactScore: 4,
    goal:
      "When completing legal, financial, or other important forms we must ensure our users avoid serious consequences of incorrectly entering data.",
    solution:
      "When building legal forms, forms which complete financial transactions, or forms which carry out irreversible actions like deleting a user from a database, we must take preventative or reversible measures. For example, we can allow users to reverse their action or validate their data prior to submission.",
  },
  "1.4.3": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html",
    title: "Contrast",
    impact: "Major",
    impactScore: 3,
    goal:
      "Text must be easily discernible against its background color so it can be read by users with low vision.",
    solution:
      "Text and images must have a contrast ratio of at least 4.5:1 with the exception of large-scale text and images of large scale-text which can have a contrast ratio of 3:1.",
  },
  "1.4.4": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html",
    title: "Resize Text",
    impact: "Major",
    impactScore: 3,
    goal:
      "Text and text-based controls must be resizable for users with visual disabilities.",
    solution:
      "With the exception of captions and images of text, all text can be resized up to 200 percent, without the use of assistive technology, while preserving content and functionality.",
  },
  "1.4.5": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-text-presentation.html",
    title: "Images Of Text",
    impact: "Major",
    impactScore: 3,
    goal:
      "Users must be able to adjust the visual appearance of textual content including size, color, and font family.",
    solution:
      "Use text in lieu of images of text so the user can customize the visual appearance of the content.",
  },
  "2.2.1": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html",
    title: "Timing Adjustable",
    impact: "Critical",
    impactScore: 4,
    goal:
      "If your application relies on timed content, users must be given adequate time to complete the task.",
    solution:
      "Users must be allowed to disable or adjust the time limit and are warned before the time expires.",
  },
  "1.2.1": {
    link:
      "https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html",
    title: "Audio-Only & Video-Only (Pre-Recorded)",
    impact: "Critical",
    impactScore: 4,
    goal:
      "Pre-recorded audio-only and visual-only content must be digestible by all users.",
    solution:
      "Alternatives must be provided for audio-only and video-only content.",
  },
  "1.2.2": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html",
    title: "Captions (Pre-Recorded)",
    impact: "Critical",
    impactScore: 4,
    goal:
      "Deaf and hard-of-hearing users may not be able to consume audio content so we must provide textual alternatives.",
    solution:
      "All pre-recorded audio content in synchronized media include captions.",
  },
  "1.2.3": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html",
    title: "Audio Description Or Media Alternative (Pre-Recorded)",
    impact: "Major",
    impactScore: 3,
    goal:
      "Blind or visually impaired users are not able to consume video content, so we must provide an audio alternative.",
    solution:
      "All pre-recorded video content in synchronized media must provide alternative methods of consumption or audio descriptions.",
  },
  "1.2.4": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-real-time-captions.html",
    title: "Captions (Live)",
    impact: "Critical",
    impactScore: 4,
    goal:
      "Deaf or hearing-impaired users must be able to consume real-time presentations.",
    solution: "Live audio content in synchronized media must include captions.",
  },
  "1.2.5": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html",
    title: "Audio Descriptions (Pre-Recorded)",
    impact: "Major",
    impactScore: 3,
    goal:
      "Blind or visually-impaired users must be able to consume recorded presentations",
    solution: "Pre-recorded video content must contain audio descriptions.",
  },
  "1.4.2": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html",
    title: "Audio Control",
    impact: "Critical",
    impactScore: 4,
    goal:
      "Users must be able to control and turn off background sounds in your applications.",
    solution:
      "If your application contains audio and plays for longer than three seconds, you must either provide a way to pause or stop the audio or provide a method for controlling the audio volume independently from their system volume.",
  },
  "2.4.5": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-mult-loc.html",
    title: "Multiple Ways",
    impact: "Moderate",
    impactScore: 2,
    goal:
      "Users must be able to locate content in the way that best suits their needs.",
    solution:
      "Multiple paths are possible to locate a web page within a web application.",
  },
  "2.4.2": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title",
    title: "Page Titled",
    impact: "Moderate",
    impactScore: 2,
    goal:
      "Web pages must have descriptive titles so users can easily find the content they're looking for.",
    solution: " Each web page should have a descriptive title.",
  },
  "2.4.1": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html",
    title: "Bypass Blocks",
    impact: "Minor",
    impactScore: 1,
    goal:
      "Users must be able to navigate through a web page to access the primary content.",
    solution:
      "Bypass blocks must be implemented which allow users to skip to the primary content.",
  },
  "1.3.3": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-understanding.html",
    title: "Sensory Characteristics",
    impact: "Moderate",
    impactScore: 2,
    goal:
      "All users must be able to access content instructions regardless of their ability to perceive shape and size of information.",
    solution:
      "Instructions do not solely rely on shape, size, visual location, orientation, or sound.",
  },
  "1.4.1": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html",
    title: "Use Of Color",
    impact: "Critical",
    impactScore: 4,
    goal: "Users should be able to access all content which relies upon color.",
    solution:
      "Content which relies upon color can be discerned by alternate means like text labels.",
  },
  "2.4.6": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html",
    title: "Headings And Labels",
    impact: "Moderate",
    impactScore: 2,
    goal: "Users should understand the information contained in the web page.",
    solution:
      "Headings and labels should be used to outline the page structure.",
  },
  "3.2.4": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-functionality.html",
    title: "Consistent Identification",
    impact: "Moderate",
    impactScore: 2,
    goal:
      "When using the same component across web pages, components should be consistently identified.",
    solution:
      "Components with the same functionality or purpose should be consistently identified.",
  },
  "1.3.1": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html",
    title: "Info and Relationships",
    impact: "Major",
    impactScore: 3,
    goal:
      "When the format presentation of content changes, the information and relationships implied by visual or auditory formatting should persist.",
    solution:
      "The information, structure, and relationships presented can be programmatically determined.",
  },
  "1.3.2": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html",
    title: "Meaningful Sequence",
    impact: "Moderate",
    impactScore: 2,
    goal:
      "User agents can provide an alternate content structure while preserving the order of content.",
    solution:
      "If content structure is meaningful, a logical reading structure can be programmatically determined.",
  },
  "2.1.1": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html",
    title: "Keyboard",
    impact: "Critical",
    impactScore: 4,
    goal: "Content must be keyboard navigable, where applicable.",
    solution:
      "Content which allows user interaction can be navigated with a keyboard.",
  },
  "2.1.2": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html",
    title: "No Keyboard Trap",
    impact: "Critical",
    impactScore: 4,
    goal: "Keyboard focus should not trap focus on an element.",
    solution: "Content which allows keyboard focus must allow keyboard blur.",
  },
  "2.3.1": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html",
    title: "Three Flashes or Below Threshold",
    impact: "Critical",
    impactScore: 4,
    goal: "Users must be able to use a website without inducing seizures.",
    solution:
      "Websites do not contain any flashing above three times in one second.",
  },
  "3.1.1": {
    link: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html",
    title: "Language of Page",
    impact: "Moderate",
    impactScore: 2,
    goal: "User agents should be able to discern the page language.",
    solution: "Developers must provide the page language in the source code.",
  },
  "3.1.2": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-other-lang-id.html",
    title: "Language of Parts",
    impact: "Moderate",
    impactScore: 2,
    goal:
      "User agents can correctly present page content written in multiple languages.",
    solution:
      "The language of page content can be programmatically determined.",
  },
  "4.1.1": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html",
    title: "Parsing",
    impact: "Critical",
    impactScore: 4,
    goal: "User agents can accurately parse page content.",
    solution:
      "Markup code must be complete with start and end tags, nested properly, and contain unique IDs.",
  },
  "4.1.2": {
    link: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html",
    title: "Name, Role, Value",
    impact: "Critical",
    impactScore: 4,
    goal:
      "User agents must be able to discern the state of controls within the page content.",
    solution:
      "Name and role of components such as form elements and links can be determined as well as their states, properties, and values.",
  },
}

export const generalDesignGuidelineIds = ["1.3.3", "1.4.1", "2.4.6", "3.2.4"]
export const generalDevelopmentGuidelineIds = [
  "1.3.1",
  "1.3.2",
  "2.1.1",
  "2.1.2",
  "2.3.1",
  "3.1.1",
  "3.1.2",
  "4.1.1",
  "4.1.2",
]
