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
          aegis-website = with pkgs; stdenv.mkDerivation {
            pname = "aegis-website";
            version = "0.0.0";
            src = ./.;

            buildPhase = ''
              ${hugo}/bin/hugo -v --destination "$out"
            '';

            dontInstall = true;
          };
        };
        defaultPackage = packages.aegis-website;
        devShell = with pkgs; mkShell {
          buildInputs = [hugo];
        };
      }
    );
}
