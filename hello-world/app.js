const lambdaHandler = async (event, context) => {
  return {
    keys: [
      {
        kty: "EC",
        kid: "Jov7Ga2dU3DVZnyaWmIiGaVrlYNx9HIARM0Q0hPwkYE",
        crv: "P-256",
        x: "D0Xml8RD1V3rWUcOtitop6coTClv6tiapBBWB7R7bcs",
        y: "jlkJnF8okWLL3cJQ6P4hLtJDV4CU55FquILCzNy1neE",
        use: "sig",
        alg: "ES256",
      },
      {
        kty: "EC",
        kid: "TETSGH-8iM5ZeW_QjnmJE4k-ZApK8twtcpte7QW3yuo",
        crv: "P-256",
        x: "57zVl5nUDgVhA1-VbjAuw9vgTM8clawGZqY0KdmekU0",
        y: "4NgcWtPfuJ810WfGR9y04rTUjTkQxUHNHrD8dJJqwlg",
        use: "enc",
        alg: "ECDH-ES+A256KW",
      },
    ],
  };
};

exports.lambdaHandler = lambdaHandler;
