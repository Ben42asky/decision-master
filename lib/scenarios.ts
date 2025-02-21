export const scenarios = {
    school: {
      title: "School Dilemma",
      description: "You are being bullied at school.",
      image: "/static/school.png",
      options: [
        {
          text: "Ignore",
          description: "Ignoring might avoid immediate conflict but could worsen the issue over time.",
          review:
            "You chose to ignore the bullying. While this might avoid immediate conflict, it could lead to prolonged stress as the issue remains unresolved.",
          feedback:
            "Ignoring problems often delays resolution. It might help to involve others or take action to prevent future incidents.",
          isCorrect: false,
        },
        {
          text: "Report to the Teacher",
          description: "Reporting offers protection but might not stop the bullying immediately.",
          review:
            "You reported the incident to the teacher. The teacher intervened, which reduced the bullying and started addressing the underlying issues.",
          feedback:
            "Seeking help from authorities can be effective. This approach ensures that the school is aware of the situation and can take appropriate measures.",
          isCorrect: true,
        },
        {
          text: "Confront the Bully",
          description: "Confrontation shows strength but could escalate the situation.",
          review:
            "You confronted the bully directly. This displayed confidence, but the confrontation led to an escalation, making the situation tense.",
          feedback:
            "While standing up for yourself is important, direct confrontation can sometimes lead to more problems. It's often safer to involve adults who can mediate.",
          isCorrect: false,
        },
        {
          text: "Seek Help from Friends",
          description: "Friends can provide support, but it may not be effective in the long term.",
          review:
            "You sought support from friends. They provided emotional support, which helped you feel less alone, but the bullying continued.",
          feedback:
            "Building a support network is valuable, but addressing the core issue may require additional steps, like involving a teacher or counselor.",
          isCorrect: false,
        },
      ],
    },
    office: {
      title: "Office Challenge",
      description: "You missed an important deadline.",
      image: "/static/deadline.png",
      options: [
        {
          text: "Apologize and Ask for Extension",
          description: "Showing responsibility, but might affect your reputation.",
          review:
            "You acknowledged your mistake and requested an extension. This showed responsibility, and your manager appreciated your honesty.",
          feedback:
            "Admitting mistakes and taking responsibility is often the best approach in professional settings. It allows for problem-solving and maintains trust.",
          isCorrect: true,
        },
        {
          text: "Work Overtime to Fix It",
          description: "Demonstrates dedication, but could lead to burnout.",
          review:
            "You chose to work overtime to meet the deadline. You managed to complete the work, but it left you feeling exhausted.",
          feedback:
            "While showing dedication is commendable, it's important to communicate challenges before they become critical. This approach doesn't address the root cause of missing the deadline.",
          isCorrect: false,
        },
        {
          text: "Blame a Team Member",
          description: "Might protect you short-term, but damages trust and relationships.",
          review:
            "You placed the blame on a colleague. While this removed the immediate pressure, it damaged trust with your team.",
          feedback:
            "Blaming others can harm relationships and credibility. It's always better to take responsibility for your own actions and work on solutions.",
          isCorrect: false,
        },
        {
          text: "Ignore and Move On",
          description: "Avoids immediate stress, but could lead to bigger problems later.",
          review:
            "You chose to ignore the missed deadline. This allowed you to avoid immediate stress, but your manager noticed and addressed it later.",
          feedback:
            "Ignoring issues may lead to larger problems. It's important to address mistakes promptly and professionally.",
          isCorrect: false,
        },
      ],
    },
    home: {
      title: "Home Emergency",
      description: "Your power went out unexpectedly.",
      image: "/static/power.png",
      options: [
        {
          text: "Wait It Out",
          description: "Easy option, but doesn't solve the underlying issue.",
          review:
            "You decided to wait for the power to return. This worked out eventually, but it delayed any important tasks.",
          feedback:
            "While patience can be a virtue, taking action to understand and potentially resolve the issue is often more productive.",
          isCorrect: false,
        },
        {
          text: "Call the Power Company",
          description: "Proactive approach, but might involve long wait times.",
          review:
            "You called the power company, and they informed you of an outage in the area. You received an estimated time for restoration.",
          feedback:
            "This is often the best first step. It helps you understand the scope of the problem and get an estimated resolution time.",
          isCorrect: true,
        },
        {
          text: "Check the Fuse Box",
          description: "Could be a quick fix, but requires some knowledge.",
          review: "You checked the fuse box but found no issues. The problem was with the main power supply.",
          feedback:
            "Checking the fuse box is a good troubleshooting step, but it's important to know when to seek professional help for electrical issues.",
          isCorrect: false,
        },
        {
          text: "Go to a Friend's House",
          description: "Provides immediate comfort, but doesn't address the problem.",
          review:
            "You decided to go to a friend's house, which provided a temporary solution but didn't address the root cause.",
          feedback:
            "While this solves immediate discomfort, it doesn't address the issue. It's important to take steps to understand and resolve the problem.",
          isCorrect: false,
        },
      ],
    },
    market: {
      title: "Market Mishap",
      description: "You realize you forgot your wallet at the checkout.",
      image: "/static/wallet.png",
      options: [
        {
          text: "Ask to Keep Items Aside",
          description: "Allows you to return, but might inconvenience others.",
          review:
            "You asked the cashier to hold your items, and they agreed. You returned with your wallet and completed the purchase.",
          feedback:
            "This is often the best solution. It's honest, allows you to complete your purchase, and is a common practice in many stores.",
          isCorrect: true,
        },
        {
          text: "Borrow Money from a Friend",
          description: "Solves the immediate problem, but could be embarrassing.",
          review:
            "You called a friend for help, who was able to lend you money. You completed your purchase but felt a bit embarrassed.",
          feedback:
            "While this solves the immediate problem, it may not always be reliable and can put strain on friendships. It's better to have a backup plan.",
          isCorrect: false,
        },
        {
          text: "Leave the Items and Go",
          description: "Avoids embarrassment, but means starting over later.",
          review:
            "You decided to leave the items and go home. While it saved time, you had to return later to get the items you needed.",
          feedback:
            "This solution works but is less efficient. It's often worth asking if the store can hold your items to save time and effort.",
          isCorrect: false,
        },
        {
          text: "Negotiate for a Smaller Purchase",
          description: "Creative solution, but might not work for all items.",
          review:
            "You tried to negotiate for a smaller purchase, but the cashier couldn't accommodate this request due to store policy.",
          feedback:
            "While creative thinking is valuable, it's important to recognize that some solutions may not be feasible in all situations.",
          isCorrect: false,
        },
      ],
    },
    park: {
      title: "Park Predicament",
      description: "You witness someone littering in the park.",
      image: "/static/park.png",
      options: [
        {
          text: "Confront the Litterer",
          description: "Direct approach, but could lead to conflict.",
          review:
            "You approached the person and politely asked them to pick up their litter. They were initially defensive but eventually complied.",
          feedback:
            "While this approach can work, it's important to prioritize personal safety. There might be more effective ways to address the issue without potential conflict.",
          isCorrect: false,
        },
        {
          text: "Pick Up the Litter Yourself",
          description: "Sets a good example, but doesn't address the root cause.",
          review:
            "You decided to pick up the litter yourself. While it cleaned the area, the litterer didn't learn from their mistake.",
          feedback:
            "Taking action to clean up is admirable, but it doesn't address the root cause of the problem. Consider combining this with other actions for a more comprehensive solution.",
          isCorrect: false,
        },
        {
          text: "Report to Park Authority",
          description: "Official approach, but might take time for action.",
          review:
            "You reported the incident to the park ranger. They thanked you for the information and said they would increase patrols in the area.",
          feedback:
            "This is often the best approach. It involves the proper authorities who can take systematic action to prevent future incidents.",
          isCorrect: true,
        },
        {
          text: "Ignore the Situation",
          description: "Avoids confrontation, but allows the problem to continue.",
          review:
            "You chose to ignore the littering. The park remained dirty, and the behavior might be repeated by others who saw it go unchallenged.",
          feedback:
            "While avoiding conflict can feel safer, it's important to find ways to address environmental issues, even indirectly.",
          isCorrect: false,
        },
      ],
    },
    restaurant: {
      title: "Restaurant Dilemma",
      description: "You receive the wrong order at a restaurant.",
      image: "/static/restaurant.png",
      options: [
        {
          text: "Eat it anyway",
          description: "Accept the mistake to avoid confrontation.",
          review: "You ate the wrong order. While it wasn't what you wanted, you avoided any potential conflict.",
          feedback:
            "Sometimes accepting small inconveniences can be easier, but it's also okay to speak up when you're not getting what you paid for.",
          isCorrect: false,
        },
        {
          text: "Politely inform the server",
          description: "Bring the mistake to the server's attention calmly.",
          review: "You informed the server about the mistake. They apologized and quickly brought you the correct order.",
          feedback:
            "This is often the best approach. It allows the restaurant to correct their mistake and ensures you get what you ordered.",
          isCorrect: true,
        },
        {
          text: "Complain loudly",
          description: "Express your dissatisfaction vocally.",
          review:
            "Your loud complaint drew attention from other diners and made the staff uncomfortable. The manager had to intervene.",
          feedback:
            "While it's okay to express dissatisfaction, doing so loudly can create an unpleasant atmosphere and may not lead to the best resolution.",
          isCorrect: false,
        },
        {
          text: "Leave without saying anything",
          description: "Exit the restaurant without addressing the issue.",
          review:
            "You left the restaurant without your correct order or any resolution. The staff was confused by your sudden departure.",
          feedback:
            "Leaving without communication doesn't solve the problem and may lead to misunderstandings. It's usually better to address issues directly.",
          isCorrect: false,
        },
      ],
    },
  }
  
  export function getScenarioData(environment: string) {
    return scenarios[environment as keyof typeof scenarios]
  }
  
  