// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CARE is ERC20 {
    event ownershipChanged(address oldOwner, address newOwner);
    event nameChanged(string oldName, string newName);
    event tokensMinted(address recepient, uint256 amount);

    address public owner;

    constructor(
        string memory _name,
        string memory _symbol
    ) ERC20(_name, _symbol) {
        owner = msg.sender;
    }

    mapping(address => bool) category1;
    mapping(address => uint256) tokensDistributed;

    uint256 public price = 0.0000083 ether;
    uint256 public minimumPurchaseLimit = 1000;
    uint256 public securityAmount = 0.5 ether;

    modifier onlyOwner() {
        require(msg.sender == owner, "UNAUTHORIZED ACCESS: Not the owner");
        _;
    }

    // register as category1

    function registerCategory1() external payable {
        require(
            msg.value >= securityAmount,
            "ERROR: Minimum security amount not provided"
        );
        category1[msg.sender] = true;
    }

    // check balance

    function checkBalance(address _account) public view returns (uint) {
        return (balanceOf(_account));
    }

    // buy tokens

    function mint() external payable {
        require(
            minimumPurchaseLimit > 1000 * price,
            "FAILED: Minimum purchase limit not satisfied"
        );
        require(
            category1[msg.sender] == true,
            "Organisation not registered as category 1"
        );

        _mint(msg.sender, msg.value / price);

        emit tokensMinted(msg.sender, msg.value / price);
    }

    // change owner
    function changeName(address _owner) public onlyOwner {
        owner = _owner;

        emit ownershipChanged(msg.sender, owner);
    }
}
