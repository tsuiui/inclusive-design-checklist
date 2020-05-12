const guidelines = {
  "2.2.2": {
    link: "https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html",
    title: "Pause, Stop, Hide",
    impact: "Critical",
    goal:
      "The goal of this principle is to avoid distracting users during their interaction with a Web page. 'Moving, blinking and scrolling' refers to content in which the visible content conveys a sense of motion. Common examples include motion pictures, synchronized media presentations, animations, real-time games, and scrolling stock tickers.",
    solution:
      "For any moving, blinking or scrolling information that starts automatically, lasts more than five seconds, and is presented in parallel with other content, there is a way for the user to pause, stop, or hide the content unless the movement, blinking, or scrolling is part of an essential activity. For any auto-updating information that starts automatically and is presented in parallel with other content, there is a way for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an essential activity. ",
  },
  "1.1.1": {
    link: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html",
    title: "Non-Text Content",
    impact: "Critical",
    goal:
      "The goal of this principle is to make information conveyed through non-text content accessible through the use of a text alternative. Text alternatives are a primary way for making information accessible because they can be rendered through visual, auditory or tactile methods to match the needs of the user.",
    solution:
      " If non-text content is a control or accepts user input, then it has a name that describes its purpose.  If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. If non-text content is a test or exercise that would be invalid if presented in text, then text alternatives at least provide descriptive identification of the non-text content.  If non-text content is primarily intended to create a specific sensory experience, then text alternatives at least provide descriptive identification of the non-text content. If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities. If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technology.",
  },
  "2.4.3": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html",
    title: "Focus Order",
    impact: "Moderate",
    goal:
      "The goal of this principle is to ensure that when users navigate sequentially through content, they encounter information in meaningful way through use of the keyboard. This reduces confusion by letting users form a consistent mental model of the content.",
    solution:
      "If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.",
  },
  "2.4.4": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html",
    title: "Link Purpose",
    impact: "Moderate",
    goal:
      "The goal of this principle is to help users understand the purpose of each link so they can decide whether they want to follow the link. Whenever possible, provide link text that identifies the purpose of the link without needing additional context.",
    solution:
      "The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.",
  },

  "3.2.1": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html",
    title: "Consistent Behavior Receive Focus",
    impact: "Major",
    goal:
      "The goal of this principle is to ensure that functionality is predictable as visitors navigate their way through a document.",
    solution:
      "When any component receives focus, it does not initiate a change of context.",
  },
  "3.2.2": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-unpredictable-change.html",
    title: "On Input",
    impact: "Moderate",
    goal:
      "The goal of this principle is to ensure that entering data or selecting a form control has predictable effects.",
    solution:
      "Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.",
  },

  "2.4.7": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html",
    title: "Focus Visible",
    impact: "Major",
    goal:
      "The goal of this principle is to help a person know which element has the keyboard focus.",
    solution:
      "Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.",
  },
  "3.3.1": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html",
    title: "Error Identification",
    impact: "Major",
    goal:
      "The goal of this principle is to ensure that users are aware that an error has occurred and can determine what is wrong. The error message should be as specific as possible.",
    solution:
      "If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.",
  },
  "3.3.2": {
    link: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html",
    title: "Labels Or Instructions",
    impact: "Major",
    goal:
      "The goal of this principle is to have content authors place instructions or labels that identify the controls in a form so that users know what input data is expected. Instructions or labels may also specify data formats for fields especially if they are out of the customary formats or if there are specific rules for correct input.",
    solution:
      "Labels or instructions are provided when content requires user input.",
  },
  "3.3.3": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html",
    title: "Error Suggestion",
    impact: "Moderate",
    goal:
      "The goal of this principle is to ensure that users receive appropriate suggestions for correction of an input error if it is possible.",
    solution:
      "If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content. ",
  },
  "3.3.4": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible.html",
    title: "Error Prevention (Legal, Financial, Data)",
    impact: "Critical",
    goal:
      "The goal of this principle is to help users with disabilities avoid serious consequences as the result of a mistake when performing an action that cannot be reversed. For example, purchasing non-refundable airline tickets or submitting an order to purchase stock in a brokerage account are financial transactions with serious consequences.",
    solution:
      "For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true: Submissions are reversible, data entered by the user is checked for input errors and the user is provided an opportunity to correct them, or a mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.",
  },
  "1.4.3": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html",
    title: "Contrast",
    impact: "Major",
    goal:
      "The goal of this principle is to provide enough contrast between text and its background so that it can be read by people with moderately low vision (who do not use contrast-enhancing assistive technology). ",
    solution:
      "The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following: large-scale text and images of large-scale text have a contrast ratio of at least 3:1, text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement, and text that is part of a logo or brand name has no minimum contrast requirement.",
  },
  "1.4.4": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html",
    title: "Resize Text",
    impact: "Major",
    goal:
      "The goal of this principle is to ensure that visually rendered text, including text-based controls (text characters that have been displayed so that they can be seen [vs. text characters that are still in data form such as ASCII]) can be scaled successfully so that it can be read directly by people with mild visual disabilities, without requiring the use of assistive technology such as a screen magnifier.",
    solution:
      "Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.",
  },
  "1.4.5": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-text-presentation.html",
    title: "Images Of Text",
    impact: "Major",
    goal:
      "The goal of this principle is to encourage authors, who are using technologies which are capable of achieving their desired default visual presentation, to enable people who require a particular visual presentation of text to be able to adjust the text presentation as needed. This includes people who require the text in a particular font size, foreground and background color, font family, line spacing or alignment.",
    solution:
      "If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text except for the following: the image of text can be visually customized to the user's requirements, or a particular presentation of text is essential to the information being conveyed.",
  },
  "2.2.1": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html",
    title: "Timing Adjustable",
    impact: "Critical",
    goal:
      "The goal of this principle is to ensure that users with disabilities are given adequate time to interact with Web content whenever possible. People with disabilities such as blindness, low vision, dexterity impairments, and cognitive limitations may require more time to read content or to perform functions such as filling out on-line forms.",
    solution:
      "For each time limit that is set by the content, at least one of the following is true: the user is allowed to turn off the time limit before encountering it, the user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting, the user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action, and the user is allowed to extend the time limit at least ten times, the time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible, the time limit is essential and extending it would invalidate the activity, or the time limit is longer than 20 hours.",
  },
  "1.2.1": {
    link:
      "https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html",
    title: "Audio-Only & Video-Only (Pre-Recorded)",
    impact: "Critical",
    goal:
      "The goal of this principle is to make information conveyed by prerecorded audio-only and prerecorded video-only content available to all users. ",
    solution:
      "For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such: an alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content or either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.",
  },
  "1.2.2": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html",
    title: "Captions (Pre-Recorded)",
    impact: "Critical",
    goal:
      "The goal of this principle is to enable people who are deaf or hard of hearing to watch synchronized media presentations.",
    solution:
      "Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.",
  },
  "1.2.3": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html",
    title: "Audio Description Or Media Alternative (Pre-Recorded)",
    impact: "Major",
    goal:
      "The goal of this principle is to provide people who are blind or visually impaired access to the visual information in a synchronized media presentation.",
    solution:
      "An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.",
  },
  "1.2.4": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-real-time-captions.html",
    title: "Captions (Live)",
    impact: "Critical",
    goal:
      "The goal of this principle is to enable people who are deaf or hard of hearing to watch real-time presentations.",
    solution:
      "Captions are provided for all live audio content in synchronized media.",
  },
  "1.2.5": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html",
    title: "Audio Descriptions (Pre-Recorded)",
    impact: "Major",
    goal:
      "The goal of this principle is to provide people who are blind or visually impaired access to the visual information in a synchronized media presentation.",
    solution:
      "Audio description is provided for all prerecorded video content in synchronized media.",
  },
  "1.4.2": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html",
    title: "Audio Control",
    impact: "Critical",
    goal:
      "Individuals who use screen reading software can find it hard to hear the speech output if there is other audio playing at the same time. This difficulty is exacerbated when the screen reader's speech output is software based (as most are today) and is controlled via the same volume control as the sound. Therefore, it is important that the user be able to turn off the background sound. Note: Having control of the volume includes being able to reduce its volume to zero.",
    solution:
      " If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.",
  },
  "2.4.5": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-mult-loc.html",
    title: "Multiple Ways",
    impact: "Moderate",
    goal:
      "The goal of this principle is to make it possible for users to locate content in a manner that best meets their needs. Users may find one technique easier or more comprehensible to use than another.",
    solution:
      "More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.",
  },
  "2.4.1": {
    link:
      "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html",
    title: "Bypass Blocks",
    impact: "Minor",
    goal:
      "The goal of this principle is to allow people who navigate sequentially through content more direct access to the primary content of the Web page.",
    solution:
      "A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.",
  },
}

export default guidelines
