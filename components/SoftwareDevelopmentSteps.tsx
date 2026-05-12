import React from 'react';

const SoftwareDevelopmentSteps = () => {
  const steps = [
    {
      number: 1,
      title: 'Planning',
      duration: 'It takes from 2 weeks to:',
      items: [
        "Document key business processes and how they're covered with existing software.",
        "Elicit business needs and concerns.",
        "Evaluate risks of new software introduction, e.g., impact on business processes, and plan risk mitigation measures.",
        'Draw up high-level functional and technical software requirements.',
        'Prepare the list of software features and integrations.',
        'Draw up a project roadmap and major milestones.'
      ],
      additionalInfo: 'For commercial software products, it additionally takes from 3 weeks to:',
      additionalItems: [
        "Conduct competition analysis (competitors' product features, pricing & monetization models, customer feedback analysis, customer acquisition strategy analysis, product efficiencies and drawbacks).",
        'Analyze the needs and wants of the target audience and create a product concept.',
        'Define product differentiation and formulate a unique selling proposition for a product to stand out from the competition.',
        'Describe obstacles that can hinder entering a given market or industry sectors (including regulatory barriers) and decide how to address them.'
      ]
    },
    {
      number: 2,
      title: 'Business Case Composition',
      duration: 'It takes from 1 week to conduct cost-benefit analysis, estimate MVP, ROI.',
      items: []
    },
    {
      number: 3,
      title: 'Architecture, UX and UI Design',
      duration: 'It takes from 2 weeks to 3 months to:',
      items: [
        'Define app architecture, techs, data flow and integration points.'
      ],
      notes: [
        'If possible, Edvenswa will re-use parts of your existing enterprise systems rather than develop new software modules, for lower cost and higher reliability of your software.'
      ],
      additionalItems: [
        'Conduct UX research, outline personas and key user scenarios, prepare user journey maps.',
        'Create wireframes and clickable prototypes.',
        'Conduct visual identity analysis, prepare design concept, create a branded UI kit with ready-to-use components (icons, buttons, colors, fonts, etc.), animations, specifications and assets for developers.'
      ],
      additionalNotes: [
        'We recommend investing in the unique, sophisticated UI design only if the design is a competitive product advantage. Otherwise, we use simple themes and focus on software functionality.'
      ]
    },
    {
      number: 4,
      title: 'MVP launch (upon request)',
      duration: 'The delivery of the first working version of enterprise software takes from 1 month. The first working version of software product can be delivered in ~ 2 months.',
      items: []
    },
    {
      number: 5,
      title: 'Development & Testing',
      items: [
        'Agile delivery of new software parts in 2-week releases.',
        'Continuous safe minor releases via automated CI/CD pipelines.',
        'Analysis of emerging needs and the release planning.',
        'Approving the release scope.',
        'Delivering and reviewing mockups.',
        'Developing and testing the approved software part, migrating the developed software part to the staging and production environment.',
        'Getting feedback from a project sponsor and users on the results of the release.',
        'Reviewing the results of the completed release and approving the scope of the next release.'
      ],
      notes: [
        'Small, well-defined projects can be delivered in a linear mode with one major release. Read more on https://www.scnsoft.com/services/software-development'
      ]
    },
    {
      number: 6,
      title: 'Deployment (and 3-Months Maintenance)',
      items: [
        'Conducting user acceptance testing (UAT).',
        'Establishing software monitoring processes.',
        'Defining new roles and responsibilities for application support in your and our teams.'
      ],
      notes: [
        'Edvenswa recommends trial implementation for a limited number of users to minimize possible downtimes in production. Trial stages usually take up to 1–3 months.'
      ]
    },
    {
      number: 7,
      title: 'Project Handover / Continuous Support (ON Demand)',
      items: [
        'Conducting project evaluation.',
        'Performing knowledge transfer to your in-house IT team/other vendors.',
        'Providing the final report and requesting your confirmation for the project closure.'
      ]
    }
  ];

  return (
    <div className="bg-white text-gray-800 py-16 px-4 max-w-8xl mx-auto">
      <div className="text-sm text-gray-500 uppercase font-medium mb-2">HOW WE DO</div>
      <h1 className="text-3xl md:text-4xl font-bold mb-12">
        Check Out Our Software Development Steps
      </h1>

      {steps.map((step, index) => (
        <div key={index} className="mb-12 pl-10">
          <h2 className="text-xl font-bold text-cyan-700 mb-1">
            {step.number}. {step.title}
          </h2>
          <div className="h-1 w-12 bg-cyan-500 mb-4"></div>

          {step.duration && (
            <p className="font-medium mb-4">{step.duration}</p>
          )}

          {step.items?.length > 0 && (
            <ul className="list-disc list-inside space-y-2 mb-4">
              {step.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}

          {(step.notes ?? []).length > 0 &&
            (step.notes ?? []).map((note, idx) => (
              <p key={idx} className="border-l-4 border-blue-400 bg-blue-50 pl-4 py-2 mb-4">
                <span className="font-semibold text-blue-700">Note:</span> {note}
              </p>
            ))}

          {step.additionalInfo && (
            <p className="font-medium mb-2">{step.additionalInfo}</p>
          )}

          {(step.additionalItems ?? []).length > 0 && (
            <ul className="list-disc list-inside space-y-2 mb-4">
              {(step.additionalItems ?? []).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}

          {(step.additionalNotes ?? []).length > 0 &&
            (step.additionalNotes ?? []).map((note, idx) => (
              <p key={idx} className="border-l-4 border-blue-400 bg-blue-50 pl-4 py-2 mt-4">
                <span className="font-semibold text-blue-700">Note:</span> {note}
              </p>
            ))}
        </div>
      ))}
    </div>
  );
};

export default SoftwareDevelopmentSteps;
