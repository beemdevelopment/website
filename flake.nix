{
  description = "Nix flake for Aegis' website";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = nixpkgs.legacyPackages.${system}; in rec {
        packages = flake-utils.lib.flattenTree {
          aegis-website = with pkgs; mkYarnPackage rec {
            name = "aegis-website";
            src = ./.;
            packageJSON = src + "/package.json";
            yarnLock = src + "/yarn.lock";

            buildPhase = ''
              export HOME=$(mktemp -d)
              yarn --offline build
            '';

            installPhase = ''
              mkdir -p $out
              cp -r node_modules/${name}/dist/client/* $out
            '';

            doDist = false;
          };
        };
        defaultPackage = packages.aegis-website;
        devShell = with pkgs; mkShell {
          buildInputs = [
            nodejs-18_x
            yarn
          ];
        };
      }
    );
}
