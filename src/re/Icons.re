let styles = Gatsby.loadCssModule("./icons.module.css");

module ExternalLink = {
  [@bs.module "react-feather"] [@react.component]
  external make: unit => React.element = "ExternalLink";
};
module Menu = {
  [@bs.module "react-feather"] [@react.component]
  external make: (~className: string=?) => React.element = "Menu";
};
module Dismiss = {
  [@bs.module "react-feather"] [@react.component]
  external make: (~className: string=?) => React.element = "XCircle";
};
module Mail = {
  [@bs.module "react-feather"] [@react.component]
  external make: (~className: string=?) => React.element = "Mail";
};

module Software = {
  [@bs.module "react-feather"] [@react.component]
  external make:
    (~className: string=?, ~height: string=?, ~width: string=?) =>
    React.element =
    "Code";
};

type simpleIcon = {
  svg: string,
  title: string,
  hex: string,
  path: string,
};

module SimpleIcon = (IconData: {let icon: simpleIcon;}) => {
  [@react.component]
  let make =
      (
        ~height="24",
        ~width="24",
        ~className="",
        ~style=ReactDOMRe.Style.make(),
        ~ariaLabel=IconData.icon.title ++ " Icon",
        ~ariaHidden=false,
      ) =>
    <svg
      role="img"
      viewBox="0 0 24 24"
      height
      width
      className
      style=ReactDOMRe.Style.(
        make(~fill="#" ++ IconData.icon.hex, ()) |> combine(style)
      )
      ariaLabel
      ariaHidden>
      <path d={IconData.icon.path} />
    </svg>;
  React.setDisplayName(make, IconData.icon.title);
};

module GitHub =
  SimpleIcon({
    [@bs.module "simple-icons/icons/github"]
    external icon: simpleIcon = "default";
  });

module LinkedIn =
  SimpleIcon({
    [@bs.module "simple-icons/icons/linkedin"]
    external icon: simpleIcon = "default";
  });

module LibraryThing =
  SimpleIcon({
    [@bs.module "simple-icons/icons/librarything"]
    external icon: simpleIcon = "default";
  });

module Chess = {
  [@react.component]
  let make = (~className="") =>
    <svg width="1em" height="1em" viewBox="0 0 45 45" className>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#fff" />
        <path
          d={|M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94
          1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9
            2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3
            1 3|}
          fill="#fff"
        />
        <path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0z" fill="#000" />
        <path
          d="M14.933 15.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z"
          fill="#000"
          strokeWidth="1.49997"
        />
      </g>
    </svg>;
};

module CreativeCommons = {
  [@react.component]
  let make = (~height="42", ~className="") =>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height
      viewBox="0 0 120 42"
      className>
      <g transform="matrix(0.9937807,0,0,0.9936694,-177.69409,-74.436409)">
        <path
          d={|M 182.23532,75.39014 L 296.29928,75.59326 C 297.89303,75.59326
            299.31686,75.35644 299.31686,78.77344 L 299.17721,116.34033 L
            179.3569,116.34033 L 179.3569,78.63379 C 179.3569,76.94922
            179.51999,75.39014 182.23532,75.39014 z|}
          style={ReactDOMRe.Style.make(~fill="#aab2ab", ())}
        />
        <g transform="matrix(0.872921,0,0,0.872921,50.12536,143.2144)">
          <path
            d={|M 187.20944,-55.6792 C 187.21502,-46.99896 180.18158,-39.95825
              171.50134,-39.95212 C 162.82113,-39.94708 155.77929,-46.97998
              155.77426,-55.66016 C 155.77426,-55.66687 155.77426,-55.67249
              155.77426,-55.6792 C 155.76922,-64.36054 162.80209,-71.40125
              171.48233,-71.40631 C 180.16367,-71.41193 187.20441,-64.37842
              187.20944,-55.69824 C 187.20944,-55.69263 187.20944,-55.68591
              187.20944,-55.6792 z|}
            style={ReactDOMRe.Style.make(~fill="#ffffff", ())}
          />
          <g transform="translate(-289.6157,99.0653)">
            <path
              d={|M 473.88455,-167.54724 C 477.36996,-164.06128
                479.11294,-159.79333 479.11294,-154.74451 C 479.11294,-149.69513
                477.40014,-145.47303 473.9746,-142.07715 C 470.33929,-138.50055
                466.04281,-136.71283 461.08513,-136.71283 C
                456.18736,-136.71283 451.96526,-138.48544 448.42003,-142.03238
                C 444.87419,-145.57819 443.10158,-149.81537
                443.10158,-154.74451 C 443.10158,-159.6731 444.87419,-163.94049
                448.42003,-167.54724 C 451.87523,-171.03375
                456.09728,-172.77618 461.08513,-172.77618 C
                466.13342,-172.77618 470.39914,-171.03375 473.88455,-167.54724
                z M 450.76657,-165.20239 C 447.81982,-162.22601
                446.34701,-158.7395 446.34701,-154.74005 C 446.34701,-150.7417
                447.80529,-147.28485 450.72125,-144.36938 C
                453.63778,-141.45288 457.10974,-139.99462 461.1383,-139.99462 C
                465.16683,-139.99462 468.66848,-141.46743 471.64486,-144.41363
                C 474.47076,-147.14947 475.88427,-150.59069
                475.88427,-154.74005 C 475.88427,-158.85809
                474.44781,-162.35297 471.57659,-165.22479 C
                468.70595,-168.09546 465.22671,-169.53131 461.1383,-169.53131 C
                457.04993,-169.53131 453.59192,-168.08813 450.76657,-165.20239
                z M 458.52106,-156.49927 C 458.07074,-157.4809
                457.39673,-157.9715 456.49781,-157.9715 C 454.90867,-157.9715
                454.11439,-156.90198 454.11439,-154.763 C 454.11439,-152.62341
                454.90867,-151.55389 456.49781,-151.55389 C
                457.54719,-151.55389 458.29676,-152.07519 458.74647,-153.11901
                L 460.94923,-151.94598 C 459.8993,-150.0805
                458.32417,-149.14697 456.22374,-149.14697 C
                454.60384,-149.14697 453.30611,-149.64367 452.33168,-150.63653
                C 451.35561,-151.62994 450.86894,-152.99926 450.86894,-154.7445
                C 450.86894,-156.46008 451.37123,-157.82159
                452.37642,-158.83013 C 453.38161,-159.83806
                454.63347,-160.34264 456.13423,-160.34264 C
                458.35435,-160.34264 459.94407,-159.46776 460.90504,-157.71978
                L 458.52106,-156.49927 z M 468.8844,-156.49927 C
                468.43353,-157.4809 467.77292,-157.9715 466.90201,-157.9715 C
                465.28095,-157.9715 464.46988,-156.90198 464.46988,-154.763 C
                464.46988,-152.62341 465.28095,-151.55389 466.90201,-151.55389
                C 467.95304,-151.55389 468.68918,-152.07519
                469.10925,-153.11901 L 471.36126,-151.94598 C
                470.31301,-150.0805 468.74007,-149.14697 466.64358,-149.14697 C
                465.02587,-149.14697 463.73095,-149.64367 462.75711,-150.63653
                C 461.78494,-151.62994 461.29773,-152.99926 461.29773,-154.7445
                C 461.29773,-156.46008 461.79221,-157.82159
                462.78061,-158.83013 C 463.76843,-159.83806
                465.02588,-160.34264 466.55408,-160.34264 C
                468.77027,-160.34264 470.35776,-159.46776 471.3154,-157.71978 L
                468.8844,-156.49927 z|}
            />
          </g>
        </g>
        <path
          d={|M 297.29639,74.91064 L 181.06688,74.91064 C 179.8203,74.91064
            178.80614,75.92529 178.80614,77.17187 L 178.80614,116.66748 C
            178.80614,116.94922 179.03466,117.17822 179.31639,117.17822 L
            299.04639,117.17822 C 299.32813,117.17822 299.55713,116.94922
            299.55713,116.66748 L 299.55713,77.17188 C 299.55713,75.92529
            298.54297,74.91064 297.29639,74.91064 z M 181.06688,75.93213 L
            297.29639,75.93213 C 297.97998,75.93213 298.53565,76.48828
            298.53565,77.17188 C 298.53565,77.17188 298.53565,93.09131
            298.53565,104.59034 L 215.4619,104.59034 C 212.41698,110.09571
            206.55077,113.83399 199.81835,113.83399 C 193.083,113.83399
            187.21825,110.09913 184.1748,104.59034 L 179.82666,104.59034 C
            179.82666,93.09132 179.82666,77.17188 179.82666,77.17188 C
            179.82664,76.48828 180.38329,75.93213 181.06688,75.93213 z|}
        />
        <path
          d={|M 265.60986,112.8833 C 265.68994,113.03906 265.79736,113.16504
            265.93115,113.26172 C 266.06494,113.35791 266.22119,113.42969
            266.40088,113.47608 C 266.58154,113.52296 266.76807,113.54639
            266.96045,113.54639 C 267.09033,113.54639 267.22998,113.53565
            267.3794,113.51368 C 267.52784,113.4922 267.66749,113.44972
            267.79835,113.3877 C 267.92823,113.32569 268.03761,113.23975
            268.12355,113.13086 C 268.21144,113.02197 268.25441,112.88379
            268.25441,112.71533 C 268.25441,112.53515 268.19679,112.38916
            268.08156,112.27685 C 267.9673,112.16455 267.81594,112.07177
            267.62941,111.99658 C 267.44386,111.92236 267.23195,111.85693
            266.9966,111.80078 C 266.76027,111.74463 266.52101,111.68262
            266.27883,111.61377 C 266.02981,111.55176 265.78762,111.47559
            265.55129,111.38525 C 265.31594,111.29541 265.10402,111.17822
            264.9175,111.03515 C 264.73098,110.89208 264.58059,110.71337
            264.46535,110.49853 C 264.35109,110.28369 264.29347,110.02392
            264.29347,109.71923 C 264.29347,109.37646 264.36671,109.07958
            264.51222,108.82763 C 264.6587,108.57568 264.85011,108.36572
            265.08644,108.19726 C 265.32179,108.02929 265.58937,107.90478
            265.8882,107.82372 C 266.18605,107.74315 266.48488,107.70263
            266.78273,107.70263 C 267.13136,107.70263 267.46535,107.74169
            267.78566,107.81982 C 268.105,107.89746 268.39015,108.02392
            268.6382,108.19824 C 268.88722,108.37256 269.08449,108.59521
            269.23097,108.86621 C 269.37648,109.13721 269.44972,109.46582
            269.44972,109.85156 L 268.02784,109.85156 C 268.01514,109.65234
            267.97315,109.4873 267.90284,109.35693 C 267.83155,109.22607
            267.73682,109.12353 267.61964,109.04834 C 267.50148,108.97412
            267.36671,108.9209 267.21534,108.89014 C 267.063,108.85889
            266.89796,108.84326 266.71827,108.84326 C 266.60108,108.84326
            266.48292,108.85596 266.36573,108.88037 C 266.24757,108.90576
            266.14112,108.94922 266.04542,109.01123 C 265.94874,109.07373
            265.86964,109.15137 265.80812,109.24463 C 265.7466,109.33838
            265.71535,109.45654 265.71535,109.59961 C 265.71535,109.73047
            265.73976,109.83643 265.78957,109.91699 C 265.83937,109.99804
            265.93801,110.07275 266.08352,110.14111 C 266.22903,110.20947
            266.43118,110.27832 266.68899,110.34668 C 266.9468,110.41504
            267.28372,110.50244 267.70071,110.60791 C 267.82473,110.63281
            267.99661,110.67822 268.21731,110.74365 C 268.43801,110.80908
            268.65676,110.91308 268.87454,111.05615 C 269.09231,111.1997
            269.27981,111.39111 269.43899,111.63037 C 269.59719,111.87012
            269.67629,112.17676 269.67629,112.55029 C 269.67629,112.85547
            269.61672,113.13867 269.49856,113.3999 C 269.3804,113.66162
            269.20461,113.8872 268.97122,114.07666 C 268.73782,114.26709
            268.44876,114.41455 268.10403,114.52051 C 267.75833,114.62647
            267.35794,114.6792 266.90481,114.6792 C 266.53762,114.6792
            266.18118,114.63379 265.83547,114.54346 C 265.49074,114.45313
            265.18508,114.31104 264.92043,114.11768 C 264.65676,113.92432
            264.4468,113.67774 264.29055,113.37891 C 264.13528,113.07959
            264.06106,112.7251 264.06692,112.31397 L 265.4888,112.31397 C
            265.48877,112.53809 265.52881,112.72803 265.60986,112.8833 z|}
          style={ReactDOMRe.Style.make(~fill="#ffffff", ())}
        />
        <path
          d={|M 273.8667,107.8667 L 276.35986,114.53076 L 274.8374,114.53076 L
            274.33349,113.04638 L 271.84033,113.04638 L 271.31787,114.53076 L
            269.84326,114.53076 L 272.36377,107.8667 L 273.8667,107.8667 z M
            273.95068,111.95264 L 273.11084,109.50928 L 273.09229,109.50928 L
            272.22315,111.95264 L 273.95068,111.95264 z|}
          style={ReactDOMRe.Style.make(~fill="#ffffff", ())}
        />
        <path
          d={|M 239.17821,107.8667 C 239.49559,107.8667 239.78563,107.89502
            240.04735,107.95068 C 240.30907,108.00683 240.53368,108.09863
            240.72118,108.22607 C 240.9077,108.35351 241.05321,108.52295
            241.15575,108.73437 C 241.25829,108.94579 241.31005,109.20703
            241.31005,109.51806 C 241.31005,109.854 241.23388,110.13329
            241.08056,110.35742 C 240.92822,110.58154 240.70165,110.76465
            240.40283,110.90771 C 240.81494,111.02587 241.12256,111.23291
            241.32568,111.5288 C 241.5288,111.82469 241.63037,112.18114
            241.63037,112.59814 C 241.63037,112.93408 241.56494,113.22509
            241.43408,113.47119 C 241.30322,113.7168 241.12646,113.91748
            240.90576,114.07324 C 240.68408,114.229 240.43115,114.34424
            240.14795,114.41845 C 239.86377,114.49365 239.57275,114.53075
            239.27295,114.53075 L 236.03662,114.53075 L 236.03662,107.86669 L
            239.17821,107.86669 L 239.17821,107.8667 z M 238.99071,110.56201 C
            239.25243,110.56201 239.46727,110.5 239.63622,110.37597 C
            239.80419,110.25146 239.88817,110.05029 239.88817,109.77099 C
            239.88817,109.61572 239.85985,109.48828 239.80419,109.38915 C
            239.74755,109.28954 239.67333,109.21239 239.57958,109.15624 C
            239.48583,109.10058 239.37841,109.06151 239.25731,109.04003 C
            239.13524,109.01806 239.00926,109.00732 238.8784,109.00732 L
            237.50535,109.00732 L 237.50535,110.56201 L 238.99071,110.56201 z M
            239.07664,113.39014 C 239.22019,113.39014 239.35691,113.37647
            239.48777,113.34815 C 239.61863,113.32032 239.73484,113.27344
            239.83445,113.2085 C 239.93406,113.14307 240.01316,113.0542
            240.07273,112.94239 C 240.1323,112.83058 240.1616,112.68751
            240.1616,112.51319 C 240.1616,112.17139 240.06492,111.92725
            239.87156,111.78126 C 239.6782,111.63527 239.42234,111.56202
            239.10496,111.56202 L 237.50535,111.56202 L 237.50535,113.39014 L
            239.07664,113.39014 z|}
          style={ReactDOMRe.Style.make(~fill="#ffffff", ())}
        />
        <path
          d={|M 241.88914,107.8667 L 243.53269,107.8667 L 245.09324,110.49854 L
            246.64402,107.8667 L 248.27781,107.8667 L 245.80418,111.97315 L
            245.80418,114.53077 L 244.33543,114.53077 L 244.33543,111.93604 L
            241.88914,107.8667 z|}
          style={ReactDOMRe.Style.make(~fill="#ffffff", ())}
        />
        <g transform="matrix(0.624995,0,0,0.624995,391.2294,176.9332)">
          <path
            d={|M -175.0083,-139.1153 C -175.00204,-129.7035
              -182.62555,-122.06751 -192.03812,-122.06049 C -201.44913,-122.05341
              -209.08512,-129.67774 -209.09293,-139.09028 C
              -209.09293,-139.09809 -209.09293,-139.10749 -209.09293,-139.1153
              C -209.09919,-148.52784 -201.47413,-156.1623
              -192.06311,-156.17011 C -182.65054,-156.17713
              -175.01456,-148.55207 -175.0083,-139.14026 C -175.0083,-139.13092
              -175.0083,-139.1239 -175.0083,-139.1153 z|}
            style={ReactDOMRe.Style.make(~fill="#ffffff", ())}
          />
          <g transform="translate(-23.9521,-89.72962)">
            <path
              d={|M -168.2204,-68.05536 C -173.39234,-68.05536
                -177.76892,-66.25067 -181.35175,-62.64203 C -185.02836,-58.90759
                -186.86588,-54.48883 -186.86588,-49.38568 C
                -186.86588,-44.28253 -185.02836,-39.89416 -181.35175,-36.22308
                C -177.67673,-32.55114 -173.29859,-30.71521 -168.2204,-30.71521
                C -163.07974,-30.71521 -158.62503,-32.56677
                -154.85312,-36.26996 C -151.30307,-39.78558
                -149.52652,-44.15827 -149.52652,-49.38568 C -149.52652,-54.6123
                -151.33432,-59.03265 -154.94843,-62.64203 C -158.5625,-66.25067
                -162.98599,-68.05536 -168.2204,-68.05536 z M
                -168.17352,-64.69519 C -163.936,-64.69519 -160.33752,-63.20221
                -157.37655,-60.21466 C -154.38748,-57.25836
                -152.89214,-53.64899 -152.89214,-49.38568 C
                -152.89214,-45.09186 -154.35466,-41.52856 -157.28438,-38.69653
                C -160.36876,-35.64727 -163.99849,-34.12304
                -168.17351,-34.12304 C -172.34856,-34.12304
                -175.94701,-35.63244 -178.96892,-38.64965 C -181.9908,-41.66918
                -183.50176,-45.24657 -183.50176,-49.38567 C
                -183.50176,-53.52398 -181.97518,-57.13414 -178.92205,-60.21465
                C -175.9939,-63.20221 -172.41107,-64.69519 -168.17352,-64.69519
                z|}
            />
            <path
              d={|M -176.49548,-52.02087 C -175.75171,-56.71856
                -172.44387,-59.22949 -168.30008,-59.22949 C -162.33911,-59.22949
                -158.70783,-54.90448 -158.70783,-49.1372 C -158.70783,-43.50982
                -162.57194,-39.13793 -168.39383,-39.13793 C
                -172.39856,-39.13793 -175.98297,-41.60277 -176.63611,-46.43877
                L -171.93292,-46.43877 C -171.7923,-43.92778
                -170.1626,-43.04418 -167.83447,-43.04418 C -165.1813,-43.04418
                -163.4563,-45.50908 -163.4563,-49.27709 C -163.4563,-53.22942
                -164.94693,-55.32244 -167.74228,-55.32244 C
                -169.79074,-55.32244 -171.55948,-54.57787 -171.93292,-52.02087
                L -170.56418,-52.02789 L -174.26734,-48.32629 L
                -177.96894,-52.02789 L -176.49548,-52.02087 z|}
            />
          </g>
        </g>
        <g>
          <circle
            cx="242.56226"
            cy="90.224609"
            r="10.8064"
            style={ReactDOMRe.Style.make(~fill="#ffffff", ())}
          />
          <g>
            <path
              d={|M 245.68994,87.09766 C 245.68994,86.68116 245.35205,86.34424
                244.93603,86.34424 L 240.16357,86.34424 C 239.74755,86.34424
                239.40966,86.68115 239.40966,87.09766 L 239.40966,91.87061 L
                240.74071,91.87061 L 240.74071,97.52295 L 244.3579,97.52295 L
                244.3579,91.87061 L 245.68993,91.87061 L 245.68993,87.09766 L
                245.68994,87.09766 z|}
            />
            <circle cx="242.5498" cy="84.083008" r="1.63232" />
          </g>
          <path
            d={|M 242.53467,78.31836 C 239.30322,78.31836 236.56641,79.4458
              234.32715,81.70215 C 232.0293,84.03516 230.88086,86.79736
              230.88086,89.98633 C 230.88086,93.1753 232.0293,95.91846
              234.32715,98.21338 C 236.625,100.50781 239.36133,101.65527
              242.53467,101.65527 C 245.74756,101.65527 248.53272,100.49853
              250.88819,98.18359 C 253.10889,95.98681 254.21827,93.2539
              254.21827,89.98632 C 254.21827,86.71874 253.08936,83.95751
              250.83057,81.70214 C 248.57178,79.4458 245.80615,78.31836
              242.53467,78.31836 z M 242.56396,80.41797 C 245.2124,80.41797
              247.46142,81.35156 249.31103,83.21875 C 251.18115,85.06592
              252.11572,87.32227 252.11572,89.98633 C 252.11572,92.66992
              251.20068,94.89746 249.36963,96.66699 C 247.4419,98.57275
              245.17334,99.52539 242.56397,99.52539 C 239.9546,99.52539
              237.70557,98.58252 235.81739,96.6958 C 233.92774,94.80957
              232.98389,92.57324 232.98389,89.98633 C 232.98389,87.3999
              233.93799,85.14404 235.84619,83.21875 C 237.67676,81.35156
              239.9165,80.41797 242.56396,80.41797 z|}
            clipRule="evenodd"
            style={ReactDOMRe.Style.make(~fillRule="evenodd", ())}
          />
        </g>
      </g>
    </svg>;
};

module Person = {
  [@react.component]
  let make = (~className="") =>
    <svg
      width="24"
      height="24"
      ariaHidden=true
      role="img"
      focusable="false"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className=Cn.(styles##svgIcon <:> className)>
      <path
        d={|M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0
          2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z|}
      />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>;
};

module Calendar = {
  [@react.component]
  let make = (~className="") =>
    <svg
      width="20"
      height="20"
      ariaHidden=true
      role="img"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className=Cn.(styles##svgIcon <:> className)>
      <g>
        <path
          d={|M15 4h3v15H2V4h3V3c0-.41.15-.76.44-1.06.29-.29.65-.44
          1.06-.44s.77.15 1.06.44c.29.3.44.65.44
            1.06v1h4V3c0-.41.15-.76.44-1.06.29-.29.65-.44 1.06-.44s.77.15
            1.06.44c.29.3.44.65.44 1.06v1zM6 3v2.5c0
            .14.05.26.15.36.09.09.21.14.35.14s.26-.05.35-.14c.1-.1.15-.22.15-.36V3c0-.14-.05-.26-.15-.35-.09-.1-.21-.15-.35-.15s-.26.05-.35.15c-.1.09-.15.21-.15.35zm7
            0v2.5c0
            .14.05.26.14.36.1.09.22.14.36.14s.26-.05.36-.14c.09-.1.14-.22.14-.36V3c0-.14-.05-.26-.14-.35-.1-.1-.22-.15-.36-.15s-.26.05-.36.15c-.09.09-.14.21-.14.35zm4
            15V8H3v10h14zM7 9v2H5V9h2zm2 0h2v2H9V9zm4 2V9h2v2h-2zm-6
            1v2H5v-2h2zm2 0h2v2H9v-2zm4 2v-2h2v2h-2zm-6 1v2H5v-2h2zm4
            2H9v-2h2v2zm4 0h-2v-2h2v2z|}
        />
      </g>
    </svg>;
};
/*
 module Library = {
   [@react.component]
   let make = () =>
     <svg
       version="1.1"
       xmlns="http://www.w3.org/2000/svg"
       width="120"
       height="120"
       viewBox="0 0 30 30">
       <path
         d="M15.1,9.3c2.6,0,4.7-2.1,4.7-4.7c0-2.6-2.1-4.7-4.7-4.7s-4.7,2.1-4.7,4.7C10.4,7.2,12.5,9.3,15.1,9.3z"
       />
       <path
         d="M19.6,10.5c2.1,0.1,3,1.8,3,1.8l6.9,9.4c0.3,0.4,0.5,0.9,0.5,1.5c0,1.5-1.2,2.7-2.7,2.7
         c-0.4,0-0.7-0.1-1-0.2l-4.2-1.2v4.1H7.8v-4.1l-4.2,1.2c-0.3,0.1-0.6,0.2-1,0.2c-1.5,0-2.7-1.2-2.7-2.7c0-0.6,0.2-1.1,0.5-1.5
         l6.9-9.4c0,0,0.9-1.7,3-1.8C10.4,10.5,19.6,10.5,19.6,10.5z M15,25.7L15,25.7l5.4-1.8l-0.1,0c-3.7-1.1-2.3-6,1.4-4.9l0.5,0.2v-5.5
         L15,16l-7.2-2.4v5.5L8.3,19c3.7-1.1,5.2,3.8,1.4,4.9l-0.1,0L15,25.7L15,25.7z"
       />
     </svg>;
 };
 */
