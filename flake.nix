{
  description = "subeenregmi website";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.05";
  };

  outputs = { nixpkgs, ... }: 
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs { inherit system; };
    in {
      devShells.${system}.default = pkgs.mkShell{
        name = "subeenregmi";

        packages = with pkgs; [
          docker
          go
          nodejs_24
          zsh
        ];

        shellHook = ''
          zsh
        '';
      };
    };
}
