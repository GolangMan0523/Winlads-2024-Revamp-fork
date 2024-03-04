const MyTable = ({ data }) => {
  return (
    <table className="border-collapse border ">
      <thead>
        <tr></tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl border border-black	   p-4 lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
              {item.name}
            </td>
            <td className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	border border-black    p-4 lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
              {item.description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Sample data
const sampleData = [
  { id: 1, name: "Promotion name", description: "WINLADS" },
  { id: 2, name: "Eligible States/Territories", description: "National" },
  {
    id: 3,
    name: "Promotion period",
    description:
      "26 Dec 2023 09:00 End: 25 Feb 2024 17:30 No entries will be accepted outside this time.",
  },
  {
    id: 4,
    name: "Website address",
    description: <a href="/" target="_blank">www.winlads.com</a>,
  },
  {
    id: 5,
    name: "Promoter",
    description:
      " WINLADS ABN: 87671535149 2009/15 everage street Moonee Ponds VIC 3039",
  },
  {
    id: 6,
    name: "Eligible entrants",
    description:
      "	Entry to the Promotion is open to Australian residents in all eligible states/territories who fulfil the method of entry requirements.",
  },
  {
    id: 7,
    name: "Details of prizes ",
    description:
      "Mazda BT50 Ute Driveaway.  5 year warranty.Registration will be paid and transfer will be done by winlads. All costs included.75000$ RRP Or ElseIf Winner don’t want the UTE , entrant can claim 65,000$ cash price.It is either Ute or Cash price",
  },
  { id: 8, name: "Total number of prizes", description: "1" },
  {
    id: 9,
    name: "Total prize value",
    description: "Total prize pool (inc GST): $ 75,000.00",
  },
  {
    id: 10,
    name: "Method of entry",
    description:
      "To enter, an entrant must, during the promotional period Each subscription package comes with a pre-defined number of entries. To enter the competition, please visit the competition website and fill out the necessary information on the online entry form as per the instructions provided on the website. Entrants have the option to subscribe to a monthly package or purchase entries for the specified drawing. It is mandatory to sign up through the website and submit the required information to validate the entry.",
  },
  {
    id: 11,
    name: "Maximum number of entries",
    description: "Unlimited",
  },
  {
    id: 12,
    name: "Prize draw ",
    description:
      "A random prize draw, in the presence of an independent scrutineer, will occur 23: 59 on 27 Feb 2024 Location of draw: Trade Promotions and Lotteries Pty Ltd Level 2 11 York Street Sydney NSW 2000 ",
  },
  {
    id: 13,
    name: "Notification of winners ",
    description:
      "Notification of winners 	Winners will be notified via Email & phone no later than 27 Feb 2024. ",
  },
  {
    id: 14,
    name: "Public announcement of winners",
    description:
      "The winners of all prizes will be published here:www.winlads.com on 29 Feb 2024",
  },

  {
    id: 15,
    name: "Unclaimed prize draw",
    description:
      "A random unclaimed prize draw, in the presence of an independent scrutineer, will occur 14:00 on 27 May 2024 Location of draw:Trade Promotions and Lotteries Pty Ltd Level 2 11 York Street Sydney NSW 2000",
  },
  {
    id: 16,
    name: "Notification of unclaimed prize winners",
    description:
      "Unclaimed prize winners will be notified via Email & phone no later than 27 May 2024",
  },
  {
    id: 17,
    name: "Public announcement of winners from unclaimed prize draw",
    description:
      "The winners of all unclaimed prizes will be published here:www.winlads.com on 29 May 2024",
  },
  {
    id: 18,
    name: " Permit reference",
    description:
      "Authorised under NSW Authority No. TP/03199  Permit No. ACT TP 23/02687",
  },
  // {
  //   id: 19,
  //   name: "Privacy Policy",
  //   description:
  //     <a href="/privacy" target="_blank">Click here</a>
  // },
];



function TermsCondition() {
  return (
    <div
      style={{
        background: "linear-gradient(88deg, #43E3ED -21.82%, #FFE9E9 131.12%)",
      }}
    >
      <div className="">
        <div className="">
          <p className="text-3xl 4xl:text-8xl xl:text-6xl special:text-8xl md:text-4xl font-bold uppercase tracking-widest p-4 text-center lg:text-4xl lg:text-center 4xl:text:center xl:text-center">
            TERMS & CONDITIONS
          </p>
        </div>
        <div className="">
          <p className="text-xl 4xl:text-6xl xl:text-4xl special:text-8xl md:text-4xl font-bold	 mx-20  p-4 text-center lg:text-4xl lg:text-left 4xl:text:left xl:text-left">
            Schedule to Terms & Conditions of Entry
          </p>
        </div>
        <div className="lg:mx-20  mx-5">
          <MyTable data={sampleData} />
        </div>

        <p className="text-2xl 4xl:text-6xl xl:text-4xl special:text-8xl md:text-4xl font-bold	mx-20   p-4 text-center lg:text-4xl lg:text-left 4xl:text:left xl:text-left mt-5">
          Terms & Conditions of Entry
        </p>
        <div className="lg:mx-20 mx-5 ">
          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4 lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            1. Information on how to enter and prize details form part of these
            terms & conditions (Terms of entry). The Terms must be read in
            conjunction with the Schedule. The Schedule defines the terminology
            used in these Terms of entry. Where there is any inconsistency
            between these Terms and the Schedule, the Schedule prevails.
            Participation in this Promotion is deemed acceptance of these Terms
            of entry.
          </p>
          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4  lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            2. Entry is open only to legal residents of the Eligible
            States/Territories who satisfy the Method of entry. Directors,
            officers, management, employees, suppliers (including prize
            suppliers) and contractors (and the immediate families of directors,
            officers, management, employees, suppliers and contractors) of the
            Promoter and of its related bodies corporate, and of the agencies
            and companies associated with this Promotion, including the
            competition permit providers TPAL (Trade Promotions and Lotteries
            Pty Ltd) are ineligible to enter. Immediate family means any of the
            following: spouse, ex-spouse, child or step-child (whether natural
            or by adoption), parent, step-parent, grandparent, step-grandparent,
            uncle, aunt, niece, nephew, brother, sister, step-brother,
            step-sister or first cousin
          </p>
          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4  lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            3. The Promotion will be conducted during the Promotion period.
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4 lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            4. The time zone applicable to any time stated, relates to the state
            or territory where the Promoter is located, unless expressly stated
            to the contrary.
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4  lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            5. The Prize/s are specified in the Details of prizes section of the
            Schedule.
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4  lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            6. The total prize pool is specified in the Total prize value
            section of the Schedule.
          </p>
          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4  lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            7. Any prize is valued in Australian dollars unless expressly stated
            to the contrary.
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4 lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            8. Any Cash prize will be distributed via EFT
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4  lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            9. Unless otherwise stated, the winner is responsible for all
            expenses in getting to and from the nominated dealership to collect
            the Motor vehicle prize. Any costs associated with the transport of
            the Motor vehicle to an alternate pick up location will be the
            responsibility of the winner.
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4  lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            10. Please allow up to 5 months from date of the winner notification
            for delivery of the Motor vehicle prize.
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4  lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            11. Unless otherwise stated, the Motor vehicle prize does not
            include petrol, comprehensive insurance, compulsory third party
            insurance, any mechanical, body or other repairs made from the date
            of redemption, optional extras and any ancillary costs associated
            with redeeming the Motor vehicle prize.
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4  lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            12. Entrants are advised that tax implications may arise from their
            prize winnings and they should seek independent financial advice
            prior to acceptance of their prize(s). The Promoter accepts no
            responsibility for any tax implications that may arise from
            accepting a prize. Entrants are responsible for any and all expenses
            that they incur in entering the competition and they will not be
            reimbursed regardless of whether or not they win the competition.
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4 lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            13. The entrants must follow the Method of entry during the
            Promotion period to enter the Promotion. Failure to do so will
            result in an invalid entry. The Promoter will not advise an Entrant
            if their entry is deemed invalid.
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4 lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            14. The time of entry will be deemed to be the time the entry is
            received by the Promoter.
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4   lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            15. Entrants may submit up to the Maximum number of entries (if
            applicable).
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4  lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            16. The Promoter accepts no responsibility for any late, lost,
            delayed, incomplete, incorrectly submitted, corrupted, illegible or
            misdirected entries, claims or correspondence whether due to
            omission, error, alteration, tampering, deletion, theft,
            destruction, disruption to any communication network or medium, or
            otherwise including those entries not received by the Promoter for
            any reason. The Promoter is not liable for any consequences of user
            error including (without limitation) costs incurred. No
            correspondence will be entered into.
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4   lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            17. The prize(s) will be awarded to the valid entrant(s) drawn
            randomly in accordance with the Prize draw details. The Promoter may
            draw additional reserve entries (and record them in order). In the
            event of an invalid entry or an ineligible entrant, or if the
            entrant is ineligible to accept the prize, the prize will be awarded
            to the first reserve entry drawn. If the prize can’t be awarded to
            the entrant drawn, the promoter will then continue this process
            until the prize is awarded.
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4  lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            18. The winner does not need to be present at the draw unless
            expressly stated to the contrary.
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4   lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            19. The winner(s) will be notified in accordance with the
            Notification of winners and Notification of unclaimed prize winners
            (if applicable) sections of the Schedule. Notification to winners
            will be deemed to have occurred on the later of the time the winner
            receives actual notification from the Promoter or two business days
            thereafter. The notification will include details about how the
            prize(s) can be claimed.
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4  lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            20. The Promoter takes no responsibility where it is unable to
            contact prize winners who have not provided correct or complete
            contact details. If an entrant’s contact details change during the
            promotional period, it is the entrant's responsibility to notify the
            Promoter. A request to modify any entry information should be
            directed to Promoter.
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4  lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            21. It is a condition of accepting any prize that the winner must
            comply with all the conditions of use of the prize and prize
            supplier’s requirements. Each prize must be taken as stated and no
            compensation will be payable if a winner is unable to use the prize
            as stated.
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4  lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            22. The winner(s) name and state/territory of residence will be
            published in accordance with the Public announcement of winners
            section of the Schedule (if applicable).
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4   lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            23. If the prize(s) has not been claimed by the Unclaimed prize draw
            time and date and subject to any written directions from a State
            lottery agency, the Promoter may conduct an Unclaimed prize draw in
            accordance with the Unclaimed prize draw section of the Schedule (if
            applicable). In the event the Unclaimed prize draw takes place, the
            Promoter will attempt to contact the winner(s) of the Unclaimed
            prize draw in accordance with the Notification of unclaimed prize
            draw section of the Schedule, and if applicable, the name and
            State/Territory of residency of any winner(s) of the Unclaimed prize
            draw will be published in accordance with the section of the
            Schedule entitled Public announcement of winners from unclaimed
            prize draw. If a prize is no longer available the promoter may
            substitute with a prize of higher or equal value subject to any
            written directions from a regulatory authority.
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4   lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            24. To the greatest extent permitted by law, the Promoter excludes
            all warranties, representations or guarantees (Warranties) regarding
            the Promotion and any prizes, including any Warranties which may
            have been made in the course of advertising or promoting the
            Promotion. The conduct of the Promotion or the supply of prizes may
            involve third parties, and the Promoter makes no Warranties and
            disclaims all liability in connection with any such third parties,
            their acts or omissions. By entering the Promotion, an entrant
            releases and indemnifies the Promoter and its related bodies
            corporate (including the officers, employees and agents of each)
            from and against all actions, penalties, liabilities, claims or
            demands the entrant may have against the Promoter or that the
            Promoter may incur for any loss or damage which is or may be
            suffered or sustained as a direct or indirect result of an entrant
            entering or participating in the Promotion or winning or failing to
            win a prize, or using or permitting any other person to use the
            prize, except for any liability which cannot be excluded by law or
            which would cause any part of this clause to be void or
            unenforceable.
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4   lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            25. If despite the foregoing clause, the Promoter incurs a liability
            to an entrant under any law which implies a Warranty into these
            Terms of entry which cannot legally be excluded, the Promoter’s
            liability in respect of the Promotion is limited, in the Promoter’s
            discretion, to either resupplying such goods or services as form
            part of the Promotion, or paying the cost of resupplying those goods
            or services.
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4 lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            26. Without limiting any of the foregoing, in no circumstances will
            an entrant or the Promoter have any liability to the other for any
            loss or damage suffered which is indirect or consequential in
            nature, including without limitation any loss of profit, loss of
            reputation, loss of goodwill, or loss of business opportunity
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4  lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            27. The Promoter and its associated agencies and companies will not
            be liable for any delay, damage, or loss in transit of prizes.
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4   lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            28. The Promoter may in its absolute discretion not accept a
            particular entry, may disqualify an entry, or cancel the entire
            Promotion at any time without giving reasons and without liability
            to any entrants. Without limiting this the Promoter reserves the
            right to verify the validity of entries, prize claims and entrants
            and to disqualify any entrant who submits an entry or prize claim
            that is misleading or not in accordance with these Terms of entry or
            who manipulates or tampers with the entry process. In the event that
            a winner breaches these Terms of entry, the winner will forfeit the
            prize in whole and no substitute will be offered. Verification is at
            the discretion of the Promoter, whose decision is final. Failure by
            the Promoter to enforce any of its rights at any stage does not
            constitute a waiver of those rights.
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4  lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            29. Prizes, or any unused portion of a prize, are not transferable
            or exchangeable and cannot be taken as cash, subject to any written
            directions from a regulatory authority. Where a prize is unavailable
            for any reason, the Promoter may substitute the prize for another
            item of equal or higher value. The Promoter accepts no
            responsibility for any variation in prize value (including between
            advertising of the Promotion and receipt of the prize).
          </p>

          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4  lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            30. In the case of the intervention of any outside act, agent or
            event which prevents or significantly hinders the Promoter’s ability
            (or that of a third party involved with the Promotion) to proceed
            with the Promotion on the dates and in the manner described in these
            Terms of entry, including but not limited to vandalism, natural
            disasters, acts of God, civil unrest, strike, war, act of terrorism,
            the Promoter’s obligations in respect of the Promotion will be
            suspended for the duration of the event and, in addition, the
            Promoter may in its absolute discretion cancel the promotion and
            recommence it from the start on the same conditions, subject to
            approval of the relevant authorities
          </p>
          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4 lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            31. All entries become the property of the Promoter. As a condition
            of entering into this Promotion, entrants agree to assign all their
            rights in and to their entry and any related content to the
            Promoter, including any copyright or other intellectual property
            rights in the entry and related content. Without limiting this, the
            Promoter may use entry content for any and all purposes including
            commercial purposes. You warrant that entry content is original,
            lawful and not misleading and that the Promoter’s use of such
            content will not infringe the rights of any third parties. The
            Promoter has no obligation to credit you as the author of any
            content submitted and may otherwise do any acts or omissions which
            would otherwise constitute an infringement of any moral rights you
            may have as an author of content.
          </p>
          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4 lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            32. Entrants consent to the Promoter using the personal information
            provided in connection with this promotion for the purposes of
            facilitating the conduct of the promotion and awarding any prizes,
            including to third parties involved in the promotion and any
            relevant authorities. In addition to any use that may be outlined in
            the Promoter’s Privacy Policy, the Promoter including third parties
            may, for an indefinite period, unless otherwise advised, use the
            private information for promotional, marketing, publicity, research
            and profiling purposes, including sending electronic messages or
            telephoning the entrant.
          </p>
          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4  lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            33. The collection and disclosure of personal information provided
            in connection with this promotion will be handled in accordance with
            the Promoter's Privacy statement which adheres to the Privacy Act
            1988 (cth) and Australian Privacy Principles.
          </p>
          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4  lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            34. The Promotion and these Terms of entry will be governed by the
            law of the State or Territory in which the Promoter ordinarily
            resides. Entrants accept the non-exclusive jurisdiction of courts
            and tribunals of that State or Territory in connection with disputes
            concerning the Promotion.
          </p>
          <p className="text-md 2xl:text-xl xl:text-md special:text-4xl md:text-2xl 	   p-4   lg:text-xl lg:text-left 4xl:text:left xl:text-left mt-5">
            35. Facebook, YouTube, Instagram, TikTok, or Snapchat may be used to
            advertise or promote the Promotion. By entering the Promotion,
            entrants agree that the Promotion is in no way sponsored, endorsed
            or administered by, or associated with Facebook, YouTube, Instagram,
            TikTok or Snapchat; and to release Facebook, YouTube, Instagram,
            TikTok, or Snapchat from all liability in relation to this
            Promotion. Any questions, comments or complaints regarding the
            Promotion should be directed to the Promoter and not Facebook,
            YouTube, Instagram, TikTok, or Snapchat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsCondition;
